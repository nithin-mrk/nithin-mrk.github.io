function area_perimeter(button){
	var Radius_val = document.getElementById('radius').value;
	var Area_val = 3.1415*parseInt(Radius_val)*parseInt(Radius_val);
	var Peri_val = 2*3.1415*parseInt(Radius_val);
	var a = button;
	switch(a){
		case 1:
			if(Radius_val != ""){
				document.getElementById('area').value = Area_val;
			}
			else{
				document.getElementById('area').value = "Enter Radius value";
			}
			break
		case 2:
			if(Radius_val != ""){
				document.getElementById('perimeter').value = Peri_val;
			}
			else{
				document.getElementById('perimeter').value = "Enter Radius value";
			}
			break
	}
}
