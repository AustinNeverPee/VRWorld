using UnityEngine;
using System.Collections;

public class CarlController : MonoBehaviour {

	private Animator animator;

	// Use this for initialization
	void Start () {
		animator = this.GetComponent<Animator>();
	}

	// Update is called once per frame
	void Update () {
		var aa = GameObject.Find("First Person Controller");
		var bb = GameObject.Find("Carl");
		var dis = Vector3.Distance(aa.transform.position, bb.transform.position);
		
		if (dis<=10.0)
		{
			animator.SetBool("IdleToRunning", true);
		}
		else if (dis>50.0)
		{
			animator.SetBool("IdleToRunning", false);
		}

		if (animator.GetBool("IdleToRunning") == true) {
			int randomIndex=Random.Range(0,10);
			if (randomIndex == 0) {
				//animator.SetBool("");
			}
			if (randomIndex == 1) {
				//animator.SetBool("");
			}
		}
	}
}