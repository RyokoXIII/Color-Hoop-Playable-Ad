using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class CountDown : MonoBehaviour
{
    [SerializeField] UIManager uiManager;

    public Text timeText;
    public GameObject subTimer;

    public int currentTime = 15;
    public bool isStart = false;


    void Awake()
    {
        timeText.text = "00:" + currentTime;
    }


    void Update()
    {
        if (isStart == false && currentTime > 0)
        {
            StartCoroutine(TimerCallBack());
        }
        else if (currentTime == 0)
        {
            StartCoroutine(CTAPopupCallBack());
        }
    }

    IEnumerator TimerCallBack()
    {
        isStart = true;
        yield return new WaitForSeconds(1);
        currentTime -= 1;

        if (currentTime < 10)
        {
            timeText.text = "00:0" + currentTime;
        }
        else
        {
            timeText.text = "00:" + currentTime;
        }
        isStart = false;
    }

    IEnumerator CTAPopupCallBack()
    {
        yield return new WaitForSeconds(0.3f);
        uiManager.downloadButton.SetActive(false);

        if (uiManager.textHint.activeInHierarchy == true)
            uiManager.textHint.SetActive(false);

        if(uiManager.ctaUI.activeInHierarchy == false)
            uiManager.ctaUI.SetActive(true);

        //subTimer.SetActive(true);
        //gameObject.SetActive(false);

        yield return new WaitForSeconds(0.5f);
        Time.timeScale = 0f;
    }
}
