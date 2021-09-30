using UnityEngine;

public class UIManager : MonoBehaviour
{
    public static UIManager instance;

    [SerializeField] GameManager manager;
    [SerializeField] GameObject uiGetReward;

    //Tutorial
    [SerializeField] GameObject guideHand1;
    [SerializeField] GameObject guideHand2;
    public GameObject textHint;
    public GameObject timerUI;
    public GameObject ctaUI;
    public GameObject downloadButton;

    //[SerializeField] GameObject uiTextTapToStart;
    //[SerializeField] GameObject uiTextGuide;


    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
    }


    public void CheckTutorial()
    {
        if (manager.currentLevel == 0)
        {
            guideHand1.SetActive(true);
        }
    }

    public void ButtonGuide()
    {
        if (guideHand1.activeSelf)
        {
            guideHand1.SetActive(false);
            guideHand2.SetActive(true);
        }
        else
        {
            guideHand2.SetActive(false);            
        }
    }

    public void ButtonDirectToStore()
    {
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
    }

    public void ButtonRestart()
    {
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
    }

    public void CompleteRound1()
    {
        uiGetReward.SetActive(true);
    }

    public void ButtonGetReward()
    {
        ActionGetReward();
    }

    public void ActionGetReward()
    {
        uiGetReward.SetActive(false);

        manager.NewLevel();
    }

    public void ButtonDownload()
    {
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
    }
}
