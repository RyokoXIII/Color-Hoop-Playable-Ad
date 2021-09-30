using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Newtonsoft.Json;

public class GameManager : MonoBehaviour
{
    public static GameManager instance;

    [Serializable]
    public struct GameConfig
    {
        public int initHop;
        public int initHoop2;
        public int initStick;

        public float distanceXStick;
        public float distanceZStick;
        public float distanceHop;

        //Tween
        public float[] heightMoveFirst;
        public float timeMoveFirst;
        public float timeMoveSecond;
        public float timeMoveTarget;

        public GameObject hopPrefab, hoop2Prefab;
        public GameObject stickPrefab;
    }

    public GameState gameState;

    [SerializeField] UIManager uiManager;
    [SerializeField] LevelData levelData;

    public GameConfig config;
    public ColorHop colorConfig;

    public int currentLevel;

    public List<StickManager> sticks;

    public int countHop;
    public int countStick;

    public int cacheIndexTap1 = -1;

    float cacheYFirst = 0;
    float heightMoveFirst;

    HopManager currentFirstHop;

    public GameObject timer, subTimer;
    public CountDown countDown;
    public bool hasPassRound1 = false;


    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }

        Application.targetFrameRate = 60;
        ReadData();
    }

    void Start()
    {
        // Khởi tạo Pool
        SimplePool.Preload(config.hopPrefab, config.initHop);
        SimplePool.Preload(config.hoop2Prefab, config.initHoop2);
        SimplePool.Preload(config.stickPrefab, config.initStick);

        currentLevel = Database.instance.GetLevel();
        if (currentLevel == 0)
            hasPassRound1 = true;


        uiManager.CheckTutorial();

        InitLevel();
    }

    public void TapToStart()
    {
        gameState = GameState.PLAYING;
    }

    void InitLevel()
    {
        if (currentLevel == 1)
        {
            uiManager.textHint.SetActive(true);
            uiManager.textHint.GetComponent<Text>().text = "Solve puzzle before time runs out";

            uiManager.timerUI.SetActive(true);
        }
        //reset
        for (int i = 0; i < sticks.Count; i++)
        {
            sticks[i].ResetForNextLevel();
        }

        sticks.Clear();

        gameState = GameState.IDLE;
        cacheIndexTap1 = -1;
        countHop = levelData.levels[currentLevel].data[0].stick.Length;
        countStick = levelData.levels[currentLevel].data.Length;

        //
        heightMoveFirst = config.heightMoveFirst[countHop - 3];

        //Sinh stick theo tọa độ dựa vào số Stick, nếu là số lẻ thì sinh từ giữa ra 2 bên, max 1 hàng = 4, nếu lớn hơn thì đẩy xuống 1 hàng
        Vector3 vector = Vector3.zero;
        vector.y = -0.3f;
        if (countStick <= 4)
        {
            if (countStick % 2 == 1)
            {
                vector.x = (config.distanceXStick / 2) + (1 - countStick / 2) * config.distanceXStick;
            }
            else
            {
                vector.x = (1 - countStick / 2) * config.distanceXStick + config.distanceXStick;
            }
            vector.z = config.distanceZStick / 2;

            for (int i = 0; i < countStick; i++)
            {
                InitStick(vector, i);
                vector.x += config.distanceXStick;
            }
        }
        else
        {
            int countStick1 = 0;
            if (countStick % 2 == 0)
                countStick1 = countStick / 2;
            else
                countStick1 = countStick / 2 + 1;

            int countStick2 = countStick - countStick1;

            if (countStick1 % 2 == 1)
            {
                vector.x = (config.distanceXStick / 2) + (1 - countStick1 / 2) * config.distanceXStick;
            }
            else
            {
                vector.x = (1 - countStick1 / 2) * config.distanceXStick + config.distanceXStick;
            }

            vector.z = 0;

            for (int i = 0; i < countStick1; i++)
            {
                InitStick(vector, i);
                vector.x += config.distanceXStick;
            }

            if (countStick2 % 2 == 1)
            {
                vector.x = (config.distanceXStick / 2) + (1 - countStick2 / 2) * config.distanceXStick;
            }
            else
            {
                vector.x = (1 - countStick2 / 2) * config.distanceXStick + config.distanceXStick;
            }

            vector.z = config.distanceZStick;

            for (int i = 0; i < countStick2; i++)
            {
                InitStick(vector, i + countStick1);
                vector.x += config.distanceXStick;
            }
        }

        for (int i = 0; i < countStick; i++)
        {
            int randomCount = 0;
            for (int k = 0; k < levelData.levels[currentLevel].data[i].stick.Length; k++)
            {
                if (levelData.levels[currentLevel].data[i].stick[k] != 0)
                {
                    randomCount++;
                }
                else
                {
                    break;
                }
            }

            Vector3 stickPos = sticks[i].transform.position;
            Vector3 hopPos = new Vector3(stickPos.x, 0, stickPos.z);

            for (int j = 0; j < randomCount; j++)
            {
                HopManager hopManager;

                if (currentLevel == 0)
                {
                    hopManager = SimplePool.Spawn(config.hopPrefab, hopPos, Quaternion.identity).GetComponent<HopManager>();
                }
                else
                {
                    hopManager = SimplePool.Spawn(config.hoop2Prefab, hopPos, Quaternion.identity).GetComponent<HopManager>();
                }

                int colorHop = levelData.levels[currentLevel].data[i].stick[j] - 1;

                hopManager.ChangeColor(colorConfig.hopColor[colorHop]);
                sticks[i].hops.Add(hopManager);

                hopPos.y += config.distanceHop;
            }
        }
    }

    void InitStick(Vector3 pos, int index)
    {
        StickManager stick = SimplePool.Spawn(config.stickPrefab, pos, Quaternion.identity).GetComponent<StickManager>();
        stick.Initialize(countHop, index);
        sticks.Add(stick);
    }

    void ReadData()
    {
        levelData = JsonConvert.DeserializeObject<LevelData>(Resources.Load<TextAsset>("Levels").ToString());
    }

    public void ResetTapWithoutMove()
    {
        cacheIndexTap1 = -1;
    }

    public void ResetTapWithMove()
    {
        cacheIndexTap1 = -1;
        currentFirstHop.transform.DOMoveY(cacheYFirst, config.timeMoveSecond).SetEase(Ease.OutBounce);
        SoundManager.instance.PlayHopDrop();
    }

    public void MoveStickAToStickB(int indexTarget)
    {
        // currentFirstHop = sticks[cacheIndexTap1].hops[sticks[cacheIndexTap1].hops.Count - 1];
        HopManager hopManager = sticks[cacheIndexTap1].hops[sticks[cacheIndexTap1].hops.Count - 1];
        sticks[cacheIndexTap1].hops.Remove(hopManager);
        sticks[indexTarget].hops.Add(hopManager);

        Vector3 endTarget = sticks[indexTarget].GetLastPosition();
        Vector3 cache = endTarget; ;
        endTarget.y = heightMoveFirst;

        SoundManager.instance.PlayHopFly();
        hopManager.transform.DOMove(endTarget, config.timeMoveTarget).OnComplete(() =>
        {
            hopManager.transform.DOMove(cache, config.timeMoveSecond).SetEase(Ease.OutBounce).OnComplete(() =>
            {
                if (sticks[indexTarget].CheckEndStick())
                {
                    SoundManager.instance.PlayStickFinish();
                    if (CheckCompleted())
                    {
                        EndGame();
                    }
                }
            });
        });

        //currentFirstHop.transform.position = sticks[indexTarget].GetLastPosition();

        ResetTapWithoutMove();
    }

    void EndGame()
    {
        gameState = GameState.WIN;
        SoundManager.instance.PlayWin();


        currentLevel++;


        StartCoroutine(ShowRewardCallBack());
    }

    IEnumerator ShowRewardCallBack()
    {
        yield return new WaitForSeconds(1f);

        if (currentLevel == 1 || hasPassRound1 == true)
        {
            uiManager.CompleteRound1();
            hasPassRound1 = false;
            currentLevel = 1;
        }
        else if (currentLevel == 2)
        {
            TurnOffDownloadBtn();

            yield return new WaitForSeconds(0.5f);
            Time.timeScale = 0f;
        }
    }

    public void NewLevel()
    {
        InitLevel();
    }

    //public void Restart()
    //{
    //    currentLevel = 1;
    //    PlayerPrefs.SetInt(Constants.LEVEL, currentLevel);

    //    Time.timeScale = 1f;
    //    uiManager.ctaUI.SetActive(false);
    //    uiManager.downloadButton.SetActive(true);

    //    subTimer.SetActive(false);
    //    timer.SetActive(true);
    //    countDown.currentTime = 15;

    //    InitLevel();
    //}

    public bool CheckCompleted()
    {
        for (int i = 0; i < sticks.Count; i++)
        {
            if (!sticks[i].isDone && sticks[i].hops.Count > 0)
            {
                return false;
            }
        }

        return true;
    }

    public bool CheckSameColor(int indexTarget)
    {
        currentFirstHop = sticks[cacheIndexTap1].hops[sticks[cacheIndexTap1].hops.Count - 1];
        HopManager hop2 = sticks[indexTarget].hops[sticks[indexTarget].hops.Count - 1];

        return currentFirstHop.typeHop == hop2.typeHop;
    }

    public void StickHopMoveFirst()
    {
        currentFirstHop = sticks[cacheIndexTap1].hops[sticks[cacheIndexTap1].hops.Count - 1];
        cacheYFirst = currentFirstHop.transform.position.y;
        currentFirstHop.transform.DOMoveY(heightMoveFirst, config.timeMoveFirst);
        SoundManager.instance.PlayHopSelect();
    }

    public void TurnOffDownloadBtn()
    {
        uiManager.downloadButton.SetActive(false);

        if (uiManager.ctaUI.activeInHierarchy == false)
        {
            uiManager.ctaUI.SetActive(true);
        }
    }
}

#region STRUCT, CLASS
[Serializable]
public struct ColorHop
{
    public Hop[] hopColor;
}

[Serializable]
public struct Hop
{
    public TypeHop typeHop;
    public Material colorHop;
}

public enum TypeHop
{
    BLUE,
    ORANGE,
    RED,
    GREEN,
    PINK,
    PURPLE,
    BLACK
}

public enum GameState
{
    IDLE,
    PLAYING,
    WIN
}

[Serializable]
public class LevelData
{
    public List<Level> levels;
}

[Serializable]
public class Level
{
    public int no;
    public Data[] data;
}

[Serializable]
public class Data
{
    public int[] stick;
}

#endregion