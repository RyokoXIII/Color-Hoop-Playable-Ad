using UnityEngine;

public class Database : MonoBehaviour
{
    public static Database instance;

    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
    }

    public int GetLevel()
    {
        return GameManager.instance.currentLevel;
    }
}
