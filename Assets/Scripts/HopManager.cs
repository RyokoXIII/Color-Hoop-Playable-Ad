using UnityEngine;

public class HopManager : MonoBehaviour
{
    //public HoopColor typeHop;
    //public MeshRenderer meshRenderer;

    //public void ChangeColor(Hop hop)
    //{
    //    //Material material = meshRenderer.material;
    //    meshRenderer.material = hop.colorHop;
    //    typeHop = hop.hoopColor;
    //}

    public HoopColor hoopColor;    
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
        hoopColor = hop.hoopColor;
    }
}
