function calculate(){
	var principal_val = document.getElementById('fname').value;
	var years_val = document.getElementById('mname').value;
	var rate_val = document.getElementById('sname').value;
	if(principal_val && years_val && rate_val != ''){
		var add = parseInt(principal_val) * (1+parseInt(rate_val)/100)*parseInt(years_val)
		document.getElementById('lname').value = add;
	}
	else{
		document.getElementById('lname').value = "Enter all the value";
	}
	
}
