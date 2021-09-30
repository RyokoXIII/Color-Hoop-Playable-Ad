using UnityEngine;

public class HopManager : MonoBehaviour
{
    public GameManager manager;
    public TypeHop typeHop;
    public MeshRenderer meshRenderer;
    public GameObject obj;

    public void ChangeColor(Hop hop)
    {
        if (obj != null)
        {
            Material[] mats = obj.GetComponent<MeshRenderer>().materials;
            mats[0] = hop.colorHop;
            obj.GetComponent<MeshRenderer>().materials = mats;
        }
        else
        {
            meshRenderer.material = hop.colorHop;
        }
        typeHop = hop.typeHop;
    }
}
