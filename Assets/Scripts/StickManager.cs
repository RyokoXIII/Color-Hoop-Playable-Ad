using System.Collections.Generic;
using UnityEngine;

public class StickManager : MonoBehaviour
{
    public List<HopManager> hops;

    public bool isDone;

    int indexStick;

    [SerializeField] ParticleSystem victoryEffect;

    [SerializeField] GameObject stick4;
    [SerializeField] GameObject stick5;

    public void Initialize(int countHop, int index)
    {
        isDone = false;
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

    void OnMouseDown()
    {
        if (GameManager.instance.currentLevel == 0)
            UIManager.instance.ButtonGuide();
        
        if(UIManager.instance.textHint.activeInHierarchy == true)
            UIManager.instance.textHint.SetActive(false);


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
                        GameManager.instance.MoveStickAToStickB(indexStick);
                    }
                    else
                    {
                        if (GameManager.instance.CheckSameColor(indexStick))
                        {
                            GameManager.instance.MoveStickAToStickB(indexStick);
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
                if (hops[i].typeHop != hops[0].typeHop)
                {
                    return false;
                }
            }
            victoryEffect.Play();
            isDone = true;

            return true;
        }
        else
        {
            return false;
        }
    }
}
