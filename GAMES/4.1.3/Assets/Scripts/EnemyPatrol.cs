using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyPatrol : MonoBehaviour
{
    [SerializeField] private float speed;
    [SerializeField] private float dist;
    [SerializeField] private Transform groundDetection;
    private bool movingRight = true;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        // moves the enemy
        transform.Translate(Vector2.right * speed * Time.deltaTime);

        //detects the ground using raycasting from an empty object in front of the Enemy object
        RaycastHit2D groundInfo = Physics2D.Raycast(groundDetection.position, Vector2.down, dist);

        // truns the enemy around whenever it detects no more ground in front of it
        if(groundInfo.collider == false)
        {
            if(movingRight == true)
            {
                transform.eulerAngles = new Vector3(0, -180, 0);
                movingRight = false;
            }
            else
            {
                transform.eulerAngles = new Vector3(0, 0, 0);
                movingRight = true;
            }
        }
    }
}
