function sum(){
	console.log('Hello Mirketa Welcome');
}

function printAdd(){
	var fname = document.getElementById('firstname').value;
	var sname = document.getElementById('secondname').value;
	var add = parseInt(fname) + parseInt(sname);
	console.log("Addition = "   + add);
}

function printSub(){
	var fname = document.getElementById('firstname').value;
	var sname = document.getElementById('secondname').value;
	var sub = parseInt(fname) - parseInt(sname);
	console.log("Subract = "  + sub);
}

function printMul(){
	var fname = document.getElementById('firstname').value;
	var sname = document.getElementById('secondname').value;
	var mul = parseInt(fname) * parseInt(sname);
	console.log("Multiply = " + mul);
}

function printDiv(){
	var fname = document.getElementById('firstname').value;
	var sname = document.getElementById('secondname').value;
	var div = parseInt(fname) / parseInt(sname);
	console.log("Division = "  + div);
}