using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


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
        public float timeMove2Hop;

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
    WaitForSeconds waitFor2Hop;

    public GameObject timer, subTimer;
    public CountDown countDown;
    public bool hasPassRound1 = false;

    public GameObject levelText;
    public AudioSource bgMusic;

    //[LunaPlaygroundField("hoop type", 0, "Hoop Config")]
    //public HoopType hoopType;
    //public List<GameObject> hoopList;

    public int turn = 5;
    public bool canClickHop = true;
    public bool hasPlayMusic = false;

    public List<GameObject> hoopPosList;


    public void GetNextStep()
    {
        List<StickManager> listCanMove = new List<StickManager>();

        for (int i = 0; i < sticks.Count; i++)
        {
            if (!sticks[i].CheckFullHop(countHop))
            {
                if (sticks[i].hops.Count == 0)
                {
                    // Move Any stick to this stick index
                    for (int k = 0; k < sticks.Count; k++)
                    {
                        if (i != k)
                        {
                            UIManager.instance.guideHand1.transform.position = hoopPosList[k].transform.position;
                            UIManager.instance.guideHand2.transform.position = hoopPosList[i].transform.position;

                            //switch (k)
                            //{
                            //    case 0:
                            //        UIManager.instance.guideHand1.transform.position = hoopPosList[0].transform.position;
                            //        break;
                            //    case 1:
                            //        UIManager.instance.guideHand1.transform.position = hoopPosList[1].transform.position;
                            //        break;
                            //    case 2:
                            //        UIManager.instance.guideHand1.transform.position = hoopPosList[2].transform.position;
                            //        break;
                            //}

                            //switch (i)
                            //{
                            //    case 0:
                            //        UIManager.instance.guideHand2.transform.position = hoopPosList[0].transform.position;
                            //        break;
                            //    case 1:
                            //        UIManager.instance.guideHand2.transform.position = hoopPosList[1].transform.position;
                            //        break;
                            //    case 2:
                            //        UIManager.instance.guideHand2.transform.position = hoopPosList[2].transform.position;
                            //        break;
                            //}

                            Debug.Log("1: Stick " + k + " move to " + " Stick " + i);
                            return;
                        }
                    }
                }
                else
                {
                    listCanMove.Add(sticks[i]);
                }
            }
        }

        for (int i = 0; i < listCanMove.Count; i++)
        {
            for (int j = 0; j < sticks.Count; j++)
            {
                if (sticks[j] != listCanMove[i])
                {
                    if (CheckSameColor2Stick(listCanMove[i].indexStick, sticks[j].indexStick))
                    {
                        UIManager.instance.guideHand1.transform.position = hoopPosList[j].transform.position;
                        UIManager.instance.guideHand2.transform.position = hoopPosList[listCanMove[i].indexStick].transform.position;

                        Debug.Log("2: Stick " + sticks[j].indexStick + " move to " + " Stick " + listCanMove[i].indexStick);
                        Debug.Log("hoop pos stick: " + hoopPosList[i].ToString());

                        return;
                    }
                }
            }
        }
    }


    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }

        Application.targetFrameRate = 60;
        //ReadData();
    }

    void Start()
    {
        // Khởi tạo Pool
        SimplePool.Preload(config.hopPrefab, config.initHop);
        waitFor2Hop = new WaitForSeconds(config.timeMove2Hop);
        //SimplePool.Preload(config.hoop2Prefab, config.initHoop2);
        SimplePool.Preload(config.stickPrefab, config.initStick);

        currentLevel = Database.instance.GetLevel();
        if (currentLevel == 0)
            hasPassRound1 = true;


        uiManager.CheckTutorial();

        //CheckModel();

        InitLevel();

        UIManager.instance.guideHand1.transform.position = hoopPosList[6].transform.position;
    }


    bool hasChangePortrait = false;
    bool hasChangeLandscape = false;

    public bool hasReboot = false;

    private void Update()
    {
        //if (Input.GetKeyDown(KeyCode.Space))
        //{
        //    GetNextStep();
        //    UIManager.instance.guideHand1.SetActive(true);
        //}

        if (UIManager.instance.timer.currentTime == 0 && hasReboot == false)
        {
            if (cacheIndexTap1 == -1)
            {
                GetNextStep();
                UIManager.instance.guideHand1.SetActive(true);
                hasReboot = true;
            }
        }

        SortSticks();

        float screenRatio = (Screen.width / Screen.height);
        if (screenRatio >= 1 && hasChangeLandscape == false)
        {
            // landscape
            SortHops();
            hasChangeLandscape = true;
            hasChangePortrait = false;
        }
        else if (screenRatio < 1 && hasChangePortrait == false)
        {
            // portrait
            SortHops();
            hasChangePortrait = true;
            hasChangeLandscape = false;
        }
    }

    public void TapToStart()
    {
        gameState = GameState.PLAYING;
    }

    void InitLevel()
    {
        //if (currentLevel == 1)
        //{
        //    uiManager.textHint.gameObject.SetActive(true);
        //    uiManager.textHint.GetComponent<Text>().text = "Solve puzzle before time runs out";

        //    uiManager.timerUI.SetActive(true);
        //}

        //reset
        for (int i = 0; i < sticks.Count; i++)
        {
            sticks[i].ResetForNextLevel();
        }

        sticks.Clear();

        gameState = GameState.IDLE;
        cacheIndexTap1 = -1;
        countHop = levelData.levels[0].data[0].stick.Length;
        countStick = levelData.levels[0].data.Length;
        Debug.Log("stick count: " + levelData.levels[0].data.Length.ToString());
        //
        heightMoveFirst = config.heightMoveFirst[countHop - 3];


        for (int i = 0; i < countStick; i++)
        {
            InitStick(i);
        }

        SortSticks();

        InitHops();

        SortHops();
    }

    void InitHops()
    {
        for (int i = 0; i < countStick; i++)
        {
            int countHopStick = 0;
            for (int k = 0; k < levelData.levels[0].data[i].stick.Length; k++)
            {
                if (levelData.levels[0].data[i].stick[k] != 0)
                {
                    countHopStick++;
                }
                else
                {
                    break;
                }
            }

            for (int j = 0; j < countHopStick; j++)
            {
                HopManager hopManager = SimplePool.Spawn(config.hopPrefab, Vector3.zero, Quaternion.identity).GetComponent<HopManager>();
                int colorHop = levelData.levels[0].data[i].stick[j] - 1;

                hopManager.ChangeColor(colorConfig.hopColor[colorHop]);
                sticks[i].hops.Add(hopManager);
            }
        }
    }

    void SortHops()
    {
        for (int i = 0; i < countStick; i++)
        {
            Vector3 stickPos = sticks[i].transform.position;
            Vector3 hopPos = new Vector3(stickPos.x, 0, stickPos.z);

            for (int j = 0; j < sticks[i].hops.Count; j++)
            {
                sticks[i].hops[j].transform.position = hopPos;

                hopPos.y += config.distanceHop;
            }
        }
    }

    void SortSticks()
    {
        countStick = sticks.Count;

        // chỉnh hiện số hàng, số cột,  (bắt đầu từ phần tử bn, hiển thị mấy cột), (bắt đầu từ phần tử cuối cùng ở phía trên đc hiển thị,...)

        float screenRatio = (Screen.width / Screen.height);
        if (screenRatio >= 1)
        {
            // landscape
            SortByRow(0, 5, -config.distanceZStick * 1.5f);
            SortByRow(5, 5, -config.distanceZStick * 0.5f);
            SortByRow(10, 5, config.distanceZStick * 0.5f);
            SortByRow(15, 5, config.distanceZStick * 1.5f);
            //SortByRow(38, 7, config.distanceZStick * 3.5f);
        }
        else if (screenRatio < 1)
        {
            // portrait
            SortByRow(0, 5, -config.distanceZStick * 1.5f);
            SortByRow(5, 5, -config.distanceZStick * 0.5f);
            SortByRow(10, 5, config.distanceZStick * 0.5f);
            SortByRow(15, 5, config.distanceZStick * 1.5f);
        }
    }

    void SortByRow(int start, int count, float zPos)
    {
        Vector3 vector = Vector3.zero;
        vector.y = -0.3f;
        vector.z = zPos;

        if (count % 2 == 1)
        {
            vector.x = (config.distanceXStick / 2) + (1 - count / 2) * config.distanceXStick;
        }
        else
        {
            vector.x = (1 - count / 2) * config.distanceXStick + config.distanceXStick;
        }

        for (int i = start; i < start + count; i++)
        {
            sticks[i].transform.position = vector;
            vector.x += config.distanceXStick;
        }
    }

    void InitStick(int index)
    {
        StickManager stick = SimplePool.Spawn(config.stickPrefab, Vector3.zero, Quaternion.identity).GetComponent<StickManager>();
        stick.Initialize(countHop, index);
        sticks.Add(stick);
    }

    //void ReadData()
    //{
    //    levelData = JsonConvert.DeserializeObject<LevelData>(Resources.Load<TextAsset>("NewLevels").ToString());
    //}

    public void ResetTapWithoutMove()
    {
        cacheIndexTap1 = -1;
    }

    public void ResetTapWithMove()
    {
        cacheIndexTap1 = -1;
        currentFirstHop.transform.DOMoveY(cacheYFirst, config.timeMoveSecond).SetEase(Ease.OutBounce);
        JellyShake();
        SoundManager.instance.PlayHopDrop();
    }

    int stickFinish = 0;


    public IEnumerator MoveStickAToStickB(int indexTarget)
    {
        int countSameColor = sticks[cacheIndexTap1].GetCountSameColor();
        int countEmptyHop = sticks[indexTarget].GetCountEmptyHop();

        int maxHopMove = Mathf.Min(countSameColor, countEmptyHop);

        MoveHop(indexTarget);

        //yield return waitFor2Hop;
        Debug.Log("turn: " + turn.ToString());

        for (int i = 1; i < maxHopMove; i++)
        {
            MoveHopWithFirst(indexTarget);

            yield return waitFor2Hop;
        }

        ResetTapWithoutMove();
    }

    bool hasFinishMove;

    void MoveHop(int indexTarget)
    {
        if (turn > 0)
        {
            HopManager hopManager = sticks[cacheIndexTap1].hops[sticks[cacheIndexTap1].hops.Count - 1];
            sticks[cacheIndexTap1].hops.Remove(hopManager);
            sticks[indexTarget].hops.Add(hopManager);

            Vector3 endTarget = sticks[indexTarget].GetLastPosition();
            Vector3 cache = endTarget;
            endTarget.y = heightMoveFirst;

            SoundManager.instance.PlayHopFly();

            //Check end game
            if (sticks[indexTarget].CheckEndStick())
            {
                stickFinish++;
                //SoundManager.instance.PlayStickFinish();
                if (CheckCompleted())
                {
                    //Luna.Unity.LifeCycle.GameEnded();
                    EndGame();
                }
                else if (stickFinish >= 2)
                {
                    //Luna.Unity.LifeCycle.GameEnded();
                    EndGame();
                }
            }

            hopManager.transform.DOMove(endTarget, config.timeMoveTarget).OnComplete(() =>
            {
                JellyShake();
                turn--;
                hopManager.transform.DOMove(cache, config.timeMoveSecond).SetEase(Ease.OutBounce).OnComplete(() =>
                {
                    if (sticks[indexTarget].CanShowFinish())
                    {
                        sticks[indexTarget].ActionWhenDoneShow();
                    }
                });
            });
        }
        else
        {
            //StartCoroutine(ShowRewardCallBack());
            EndGame();
            //Luna.Unity.LifeCycle.GameEnded();
            //Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
        }
    }


    void MoveHopWithFirst(int indexTarget)
    {
        if (turn > 0)
        {
            HopManager hopManager = sticks[cacheIndexTap1].hops[sticks[cacheIndexTap1].hops.Count - 1];
            sticks[cacheIndexTap1].hops.Remove(hopManager);
            sticks[indexTarget].hops.Add(hopManager);

            Transform firstHop = hopManager.transform;
            Vector3 endTarget = sticks[indexTarget].GetLastPosition();
            Vector3 cache = endTarget;
            endTarget.y = heightMoveFirst;

            firstHop.transform.DOMoveY(heightMoveFirst, config.timeMoveFirst).OnComplete(() =>
            {
                SoundManager.instance.PlayHopFly();

                //Check end game
                if (sticks[indexTarget].CheckEndStick())
                {
                    stickFinish++;
                    //SoundManager.instance.PlayStickFinish();
                    if (CheckCompleted())
                    {
                        //Luna.Unity.LifeCycle.GameEnded();
                        EndGame();
                    }
                    else if (stickFinish >= 2)
                    {
                        //Luna.Unity.LifeCycle.GameEnded();
                        EndGame();
                    }
                }

                firstHop.transform.DOMove(endTarget, config.timeMoveTarget).OnComplete(() =>
            {

                //JellyShake();
                firstHop.transform.DOMove(cache, config.timeMoveSecond).SetEase(Ease.OutBounce).OnComplete(() =>
                {
                    if (sticks[indexTarget].CanShowFinish())
                    {
                        sticks[indexTarget].ActionWhenDoneShow();
                    }
                });
            });
            });
        }
        else
        {
            //StartCoroutine(ShowRewardCallBack());

            EndGame();
            //Luna.Unity.LifeCycle.GameEnded();
            //Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
        }
    }

    void EndGame()
    {
        gameState = GameState.WIN;
        //SoundManager.instance.PlayWin();
        //SoundManager.instance.PlayStickFinish();


        if (uiManager.ctaUI.activeInHierarchy == false)
        {
            uiManager.ctaUI.SetActive(true);
            uiManager.downloadButton.SetActive(false);
            //Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
        }


        //StartCoroutine(ShowRewardCallBack());
    }

    IEnumerator ShowRewardCallBack()
    {
        yield return new WaitForSeconds(0.5f);

        //if (currentLevel == 1 || hasPassRound1 == true)
        //{
        //    uiManager.CompleteRound1();
        //    hasPassRound1 = false;
        //    currentLevel = 1;
        //}
        //else if (currentLevel == 2)
        //{
        //TurnOffDownloadBtn();

        yield return new WaitForSeconds(0.5f);
        Time.timeScale = 0f;
        //}
    }

    public void NewLevel()
    {
        InitLevel();
    }



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

        return currentFirstHop.hoopColor == hop2.hoopColor;
    }

    public bool CheckSameColor2Stick(int indexStick1, int indexStick2)
    {
        HopManager hop1 = sticks[indexStick1].hops[sticks[indexStick1].hops.Count - 1];
        HopManager hop2 = sticks[indexStick2].hops[sticks[indexStick2].hops.Count - 1];

        return hop1.hoopColor == hop2.hoopColor;
    }

    public void StickHopMoveFirst()
    {
        currentFirstHop = sticks[cacheIndexTap1].hops[sticks[cacheIndexTap1].hops.Count - 1];
        //cacheYFirst = currentFirstHop.transform.position.y;
        cacheYFirst = (sticks[cacheIndexTap1].hops.Count - 1) * config.distanceHop;
        currentFirstHop.transform.DOMoveY(heightMoveFirst, config.timeMoveFirst);
        JellyShake();
        SoundManager.instance.PlayHopSelect();
    }

    bool isShaking = false;
    public void JellyShake()
    {

        float duration = 0.3f;
        float strength = 0.8f;

        //currentFirstHop.transform.DOShakeRotation(duration, strength);
        if (!isShaking)
        {
            isShaking = true;
            currentFirstHop.transform.DOShakeScale(duration, strength).OnComplete(() => isShaking = false);

        }
    }

    public void TurnOffDownloadBtn()
    {
        uiManager.downloadButton.SetActive(false);
        levelText.SetActive(false);

        if (uiManager.ctaUI.activeInHierarchy == false)
        {
            uiManager.ctaUI.SetActive(true);
            //Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
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
    public HoopColor hoopColor;
    public Material colorHop;
}

public enum HoopColor
{
    BLUE,
    RED,
    GREEN,
    PINK,
    PURPLE,
    CYAN,
    YELLOW
}

public enum HoopType
{
    Ring,
    Donut,
    Round,
    ThinRound,
    Square,
    ThinSquare,
    Wheel,
    Screw,
    DogBowl
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