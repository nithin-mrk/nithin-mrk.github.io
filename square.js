function square(){
	var length_val = document.getElementById('length').value;
	if(length_val !=''){
		document.getElementById('square').value = parseInt(length_val)* 
		 parseInt(length_val);
	}
	else{
		document.getElementById('square').value = "Enter side value";
	}
}