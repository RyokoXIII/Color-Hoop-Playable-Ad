using UnityEngine;

public class ViewPortHandler : MonoBehaviour
{
    public new Camera camera;


    private void Update()
    {
        float screenRatio = (Screen.width / Screen.height);
        if (screenRatio >= 1)
        {
            // landscape
            camera.orthographicSize = 3.3f;
        }
        else if (screenRatio < 1)
        {
            // portrait
            camera.orthographicSize = 5f;
        }
    }
}