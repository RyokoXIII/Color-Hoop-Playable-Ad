using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class UIManager : MonoBehaviour
{
    public static UIManager instance;

    [SerializeField] GameManager manager;
    [SerializeField] GameObject uiGetReward;

    //Tutorial
    [SerializeField] GameObject guideHand1;
    [SerializeField] GameObject guideHand2;
    public TextMeshProUGUI textHint;
    public GameObject timerUI;
    public GameObject ctaUI;
    public GameObject downloadButton;
    public RawImage downloadBtn;

    [Header("Luna Settings")]
    [Space(10f)]
    [LunaPlaygroundAsset("Button Image", 1, "Game UI")]
    public Texture2D buttonImage;

    [LunaPlaygroundField("Download Button Text", 2, "Game UI")]
    public string downloadText = "DOWNLOAD";

    [LunaPlaygroundField("Level Text", 3, "Game UI")]
    public string levelText = "Level 1069";

    [LunaPlaygroundField("text hint", 0, "Game UI")]
    public string hintText = "SAME COLOR hoop can be placed on top each other";

    [LunaPlaygroundAsset("Background", 4, "Game UI")]
    public Texture2D backgroundImg;

    public SpriteRenderer background;
    public Text downloadTxt;
    public TextMeshProUGUI levelTxt;

    public GameObject mask, mask2;


    int installClick = 0;
    int ctaClick = 0;


    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
    }

    private void Start()
    {
        // Assign assets
        downloadBtn.texture = buttonImage;
        downloadTxt.text = downloadText;
        levelTxt.text = levelText;
        textHint.text = hintText;
        //background.texture = backgroundImg;
        background.sprite = Sprite.Create(backgroundImg, new Rect(0, 0, backgroundImg.width, backgroundImg.height), new Vector2(0.5f, 0.5f));

        //gameIcon.texture = gameIconImg;
        //ctaButton1.texture = buttonImage;
        //ctaButton2.texture = buttonImage;
        //ctaBtn1Txt.text = ctaBtn1Text;
        //ctaBtn2Txt.text = ctaBtn2Text;
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
            mask.SetActive(false);
            mask2.SetActive(true);
        }
        else
        {
            guideHand2.SetActive(false);
            mask2.SetActive(false);
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
