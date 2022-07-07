function Rectangle(button){
	var length_val = document.getElementById('length').value;
	var breath_val = document.getElementById('breath').value;
	if(button == 1){
		if(length_val && breath_val !=''){
			document.getElementById('area').value = parseInt(length_val)* 
			 parseInt(breath_val);
		}
		else{
			document.getElementById('area').value = "Enter all the value";
	    }
	}
	if(button == 2){
		if(length_val && breath_val !=''){
			document.getElementById('perimeter').value = 2*(parseInt(length_val)* 
			 parseInt(breath_val));
		}
		else{
			document.getElementById('perimeter').value = "Enter all the value";
	    }
	}
	
}