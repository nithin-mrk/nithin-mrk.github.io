function Cylinder(button){
	var radius_val = document.getElementById('radius').value;
	var height_val = document.getElementById('height').value;
	if(button == 1){
		if(radius_val && height_val !=''){
			document.getElementById('area').value = 2*3.1415*parseInt(radius_val)* 
			 parseInt(height_val);
		}
		else{
			document.getElementById('area').value = "Enter all the value";
	    }
	}
	if(button == 2){
		if(radius_val && height_val !=''){
			document.getElementById('volume').value = 3.1415*parseInt(radius_val)* 
			parseInt(radius_val)*parseInt(height_val);
		}
		else{
			document.getElementById('volume').value = "Enter all the value";
	    }
	}
	
}