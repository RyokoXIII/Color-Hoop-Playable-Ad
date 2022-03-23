using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BackgroundFitCamera : MonoBehaviour
{
    public SpriteRenderer backgroundSpriteRenderer;
    public GameObject background;

    public Camera camera;

    public float backgroundDistanceFromCamera = 10f;


    //private void Update()
    //{

    //    var height = Camera.main.orthographicSize * 2;
    //    var width = height * Screen.width / Screen.height;
    //    transform.localScale = new Vector3((float)width, (float)height, 0.1f);        
    //}


    public void Fit()
    {
        Vector2 backgroundSize = backgroundSpriteRenderer.sprite.rect.size / backgroundSpriteRenderer.sprite.pixelsPerUnit;
        Vector2 cameraFrustumSize = GetCameraFrustumSize(camera, backgroundDistanceFromCamera);
        float scale = Mathf.Max(cameraFrustumSize.x / backgroundSize.x, cameraFrustumSize.y / backgroundSize.y);
        backgroundSpriteRenderer.transform.localScale = scale * Vector3.one;


        Vector3 cameraForward = camera.transform.forward;
        backgroundSpriteRenderer.transform.forward = -camera.transform.forward;
        backgroundSpriteRenderer.transform.position = camera.transform.position + cameraForward * backgroundDistanceFromCamera;


    }

    private Vector2 GetCameraFrustumSize(Camera camera, float distance)
    {
        var frustumHeight = 2.0f * distance * Mathf.Tan(camera.fieldOfView * 0.5f * Mathf.Deg2Rad);
        var frustumWidth = frustumHeight * camera.aspect;

        return new Vector2(camera.aspect * camera.orthographicSize, camera.orthographicSize) * 2f;
    }
}
