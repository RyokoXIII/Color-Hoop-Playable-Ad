using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    public static SoundManager instance;

    //[SerializeField] AudioSource[] audios;
    public AudioSource audio;
    [SerializeField] AudioClip hopFly;
    [SerializeField] AudioClip hopSelect;
    [SerializeField] AudioClip stickFinish;
    [SerializeField] AudioClip win;
    [SerializeField] AudioClip button;

    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
    }


    void PlayAudio(AudioClip clip)
    {
        //for (int i = 0; i < audios.Length; i++)
        //{
        //    if (!audios[i].isPlaying)
        //    {
        //        audios[i].clip = clip;
        //        audios[i].Play();

        //        break;
        //    }
        //}        
    }

    public void PlayHopFly()
    {
        //PlayAudio(hopFly);
        audio.PlayOneShot(hopFly);
    }

    public void PlayHopDrop()
    {
        //PlayAudio(hopFly);
        audio.PlayOneShot(hopFly);
    }

    public void PlayHopSelect()
    {
        //PlayAudio(hopSelect);
        audio.PlayOneShot(hopSelect);
    }

    public void PlayStickFinish()
    {
        //PlayAudio(stickFinish);
        audio.PlayOneShot(stickFinish);
    }

    public void PlayWin()
    {
        //PlayAudio(win);
        audio.PlayOneShot(win);
    }

    public void PlayButton()
    {
        //PlayAudio(button);
        audio.PlayOneShot(button);
    }
}
