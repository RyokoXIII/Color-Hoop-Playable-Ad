using System.Collections.Generic;
using UnityEngine;

public class StickManager : MonoBehaviour
{
    public List<HopManager> hops;

    public bool isDone;
    public bool isShowFinish;

    public int indexStick;

    [SerializeField] ParticleSystem victoryEffect;

    [SerializeField] GameObject stick4;
    [SerializeField] GameObject stick5;

    public GameObject startPoint;



    public void Initialize(int countHop, int index)
    {
        isDone = false;
        isShowFinish = false;

        stick4.SetActive(countHop >= 4);
        stick5.SetActive(countHop > 4);

        indexStick = index;
    }

    public void ResetForNextLevel()
    {
        isDone = false;
        for (int i = 0; i < hops.Count; i++)
        {
            hops[i].gameObject.SetActive(false);
        }
        hops.Clear();
        gameObject.SetActive(false);
    }

    public bool CheckFullHop(int maxHop)
    {
        return hops.Count == maxHop;
    }

    bool hasFirstStart = false;

    void OnMouseDown()
    {
        if (GameManager.instance.turn > 0)
        {
            UIManager.instance.timer.currentTime = 3;
            //GameManager.instance.hasReboot = false;
        }

        if (!GameManager.instance.canClickHop)
        {
            return;
        }

        if (GameManager.instance.hasPlayMusic == false)
        {
            GameManager.instance.hasPlayMusic = true;
            GameManager.instance.bgMusic.Play();
        }

        UIManager.instance.ButtonGuide();


        //if (UIManager.instance.textHint.gameObject.activeInHierarchy == true)
        //    UIManager.instance.textHint.gameObject.SetActive(false);


        if (GameManager.instance.gameState != GameState.WIN && isDone == false)
        {
            if (GameManager.instance.cacheIndexTap1 < 0)
            {
                if (hops.Count > 0)
                {
                    GameManager.instance.cacheIndexTap1 = indexStick;
                    GameManager.instance.StickHopMoveFirst();
                }
            }
            else
            {
                if (hops.Count >= GameManager.instance.countHop || indexStick == GameManager.instance.cacheIndexTap1)
                {
                    GameManager.instance.ResetTapWithMove();
                }
                else
                {
                    if (hops.Count == 0)
                    {
                        StartCoroutine(GameManager.instance.MoveStickAToStickB(indexStick));
                    }
                    else
                    {
                        if (GameManager.instance.CheckSameColor(indexStick))
                        {
                            StartCoroutine(GameManager.instance.MoveStickAToStickB(indexStick));
                        }
                        else
                        {
                            GameManager.instance.ResetTapWithMove();
                        }
                    }
                }
            }
        }
    }

    public int GetCountSameColor()
    {
        int countSameColor = 0;
        HoopColor typeHop = hops[hops.Count - 1].hoopColor;
        for (int i = hops.Count - 1; i >= 0; i--)
        {
            if (hops[i].hoopColor == typeHop)
                countSameColor++;
            else
                break;
        }

        return countSameColor;
    }

    public int GetCountEmptyHop()
    {
        return GameManager.instance.countHop - hops.Count;
    }

    public Vector3 GetLastPosition()
    {
        Vector3 position = transform.position;

        position.y = (hops.Count - 1) * GameManager.instance.config.distanceHop;

        return position;
    }

    public bool CheckEndStick()
    {
        if (hops.Count == GameManager.instance.countHop)
        {
            for (int i = 1; i < hops.Count; i++)
            {
                if (hops[i].hoopColor != hops[0].hoopColor)
                {
                    return false;
                }
            }
            //victoryEffect.Play();
            isDone = true;

            return true;
        }
        else
        {
            return false;
        }
    }

    public bool CanShowFinish()
    {
        return isDone && !isShowFinish;
    }

    public void ActionWhenDoneShow()
    {
        SoundManager.instance.PlayStickFinish();
        isShowFinish = true;
        //Lid fall
        victoryEffect.Play();
    }
}
