using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    public static SoundManager instance;

    [SerializeField] AudioSource[] audios;
    [SerializeField] AudioClip hopFly;
    [SerializeField] AudioClip hopDrop;
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
        for (int i = 0; i < audios.Length; i++)
        {
            if (!audios[i].isPlaying)
            {
                audios[i].clip = clip;
                audios[i].Play();

                break;
            }
        }
    }

    public void PlayHopFly()
    {
        PlayAudio(hopFly);
    }

    public void PlayHopDrop()
    {
        PlayAudio(hopDrop);
    }

    public void PlayHopSelect()
    {
        PlayAudio(hopSelect);
    }

    public void PlayStickFinish()
    {
        PlayAudio(stickFinish);
    }

    public void PlayWin()
    {
        PlayAudio(win);
    }

    public void PlayButton()
    {
        PlayAudio(button);
    }
}
