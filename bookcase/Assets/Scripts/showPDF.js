#pragma strict

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1")){   
        var ray = Camera.main.ScreenPointToRay(Input.mousePosition);   
        var hit : RaycastHit;
       	
        if(Physics.Raycast(ray,hit)){
			if(hit.collider.gameObject.name == "book1") {
				Application.OpenURL("C:/Unity Workspace/bookcase/Assets/pdf/PHP5.Advance-Visual.QuickPro.Guide.pdf");
			}
			
			if(hit.collider.gameObject.name == "book2") {
				Application.OpenURL("C:/Unity Workspace/bookcase/Assets/pdf/他的国.pdf");
			}
			
			if(hit.collider.gameObject.name == "book3") {
				Application.OpenURL("C:/Unity Workspace/bookcase/Assets/pdf/在路上.pdf");
			}
			
			if(hit.collider.gameObject.name == "book4") {
				Application.OpenURL("C:/Unity Workspace/bookcase/Assets/pdf/万物生长.pdf");
			}
        }   
    }
}