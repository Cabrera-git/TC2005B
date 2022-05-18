using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField] private float speed;
    private Rigidbody2D body;
    private bool grounded;
    
    [SerializeField] private Text scoreText;
    [SerializeField] private float points;
    [SerializeField] private GameObject spawn;

    // Start is called before the first frame update
    void Start()
    {
        body = GetComponent<Rigidbody2D>();
        
        points = 0;
        scoreText.text = "Score: " + points;
        transform.position = new Vector2(spawn.transform.position.x, spawn.transform.position.y);
    }

    // Update is called once per frame
    void Update()
    {
        float direction = Input.GetAxis("Horizontal");

        //moves player
        body.velocity = new Vector2(direction * speed * speedMult(), body.velocity.y);

        // mirrors player when moving left
        if(direction > 0.01f)
        {
            transform.localScale = Vector3.one;
        }
        else if(direction < -0.01f)
        {
            transform.localScale = new Vector3(-1, 1, 1);
        }

        // jump
        if(Input.GetKey(KeyCode.Space) && grounded)
        {
            Jump();
        }
    }

    private void Jump()
    {
        // jump
        body.velocity = new Vector2(body.velocity.x, speed);
        grounded = false;
    }

    
    private void OnCollisionEnter2D(Collision2D collision) 
    {
        // allows the player to jump only if they land on a Ground or Platform object
        if(collision.gameObject.tag == "Ground" || collision.gameObject.tag == "Platform")
        {
            grounded = true;
        }

        // detects enemy collision for point substraction
        if(collision.gameObject.tag == "Enemy")
        {
            points -= 50;
            scoreText.text = "Score: " + points;
        }
        
        // detects objective collision for point addition and position reset
        if(collision.gameObject.tag == "Objective")
        {
            points += 100;
            scoreText.text = "Score: " + points;
            transform.position = new Vector2(spawn.transform.position.x, spawn.transform.position.y);
        }
    }

    private float speedMult()
    {
        if(points <= 0)
        {
            return 1;
        }
        else
        {
            return 1 + points * 0.0001f; 
        }
    }
}