using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BackgroundHandler : MonoBehaviour
{
    public bool isAspectRatio;

    public Camera main;

    Vector3 spriteSize;

    private void Start()
    {
        //var topRightCorner = main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, Camera.main.transform.position.z));
        //var worldSpaceWidth = topRightCorner.x * 2;
        //var worldSpaceHeight = topRightCorner.y * 2;

        spriteSize = GetComponent<SpriteRenderer>().bounds.size;

        //var scaleFactorX = worldSpaceWidth / spriteSize.x;
        //var scaleFactorY = worldSpaceHeight / spriteSize.y;

        //if (isAspectRatio)
        //{
        //    if (scaleFactorX > scaleFactorY)
        //    {
        //        scaleFactorY = scaleFactorX;
        //    }
        //    else
        //    {
        //        scaleFactorX = scaleFactorY;
        //    }
        //}
        //transform.localScale = new Vector3(scaleFactorX, -scaleFactorY, 1);
    }

    private void Update()
    {
        var topRightCorner = main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, Camera.main.transform.position.z));
        var worldSpaceWidth = topRightCorner.x * 2;
        var worldSpaceHeight = topRightCorner.y * 2;

        var scaleFactorX = worldSpaceWidth / spriteSize.x;
        var scaleFactorY = worldSpaceHeight / spriteSize.y;

        if (isAspectRatio)
        {
            if (scaleFactorX > scaleFactorY)
            {
                scaleFactorY = scaleFactorX;
            }
            else
            {
                scaleFactorX = scaleFactorY;
            }
        }
        transform.localScale = new Vector3(scaleFactorX, -scaleFactorY, 1);
    }
}
