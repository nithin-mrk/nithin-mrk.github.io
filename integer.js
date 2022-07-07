function calculate(){
	var num1 = document.getElementById('fname').value;
	var num2 = document.getElementById('mname').value;
	var num3 = document.getElementById('sname').value;
	if(num1 && num2 && num3 != ''){
		var add = (parseInt(num1) * parseInt(num2) * parseInt(num3))/100;
		document.getElementById('lname').value = add;
	}
	else{
		document.getElementById('lname').value = "Enter all the value";
	}
	
}
