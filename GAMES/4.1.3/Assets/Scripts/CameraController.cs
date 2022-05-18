using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    private float currentX;
    private Vector3 vel = Vector3.zero;
    [SerializeField] private Transform player;


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // moves camera the camera so that it is on the player at all times
        transform.position = new Vector3(player.position.x, player.position.y, transform.position.z);
    }

     
}
