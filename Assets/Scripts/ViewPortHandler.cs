using UnityEngine;

public class ViewPortHandler : MonoBehaviour
{
    public new Camera camera;
    public RectTransform mask;
    public RectTransform mask2;

    public BackgroundFitCamera bgFitCamera;

    private void Update()
    {
        float screenRatio = (Screen.width / Screen.height);
        if (screenRatio >= 1)
        {
            // landscape
            camera.orthographicSize = 5f;
            camera.transform.position = new Vector3(1.9f, 15f, -19.77f);

            if (mask.gameObject.activeInHierarchy == true)
                mask.anchoredPosition = new Vector2(139, 55);

            if (mask2.gameObject.activeInHierarchy == true)
                mask2.anchoredPosition = new Vector2(273, 55);
        }
        else if (screenRatio < 1)
        {
            // portrait
            camera.orthographicSize = 7f;
            camera.transform.position = new Vector3(1.9f, 13.28f, -19.77f);

            if (mask.gameObject.activeInHierarchy == true)
                mask.anchoredPosition = new Vector2(130, 5);

            if (mask2.gameObject.activeInHierarchy == true)
                mask2.anchoredPosition = new Vector2(250, 5);
        }

        bgFitCamera.Fit();
    }
}