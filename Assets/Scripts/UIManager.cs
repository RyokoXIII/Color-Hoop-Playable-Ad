using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DG.Tweening;

public class UIManager : MonoBehaviour
{
    public static UIManager instance;

    [SerializeField] GameManager manager;
    [SerializeField] GameObject uiGetReward;

    //Tutorial
    public GameObject guideHand1;
    public GameObject guideHand2;
    public TextMeshProUGUI textHint;
    public GameObject timerUI;
    public GameObject ctaUI;
    public GameObject downloadButton;
    public RawImage downloadBtn;
    public SpriteRenderer background;
    public TextMeshProUGUI levelTxt;

    public GameObject mask, mask2;
    public CountDown timer;

    public Button soundButton;
    public Image soundBtnImage;
    public Sprite soundOn, soundOff;


    int installClick = 0;
    int ctaClick = 0;
    bool hasSound = true;


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
            GameManager.instance.hasReboot = false;
        }
    }

    public void SoundSetting()
    {
        if(hasSound == true)
        {
            soundBtnImage.sprite = soundOff;
            hasSound = false;

            GameManager.instance.bgMusic.Pause();
            //SoundManager.instance.audio.volume = 0;
        }
        else if(hasSound == false)
        {
            hasSound = true;
            soundBtnImage.sprite = soundOn;
            GameManager.instance.bgMusic.Play();
            //SoundManager.instance.audio.volume = 1;
        }
    }

    public void ButtonDirectToStore()
    {
        ctaClick++;
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.Analytics.LogEvent("cta_click", ctaClick);
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
        installClick++;
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.Analytics.LogEvent("download_click", installClick);
    }
}
