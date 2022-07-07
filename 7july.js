function demo(){
	var num = document.getElementById('fname').value;
	var mul = parseInt(num)*2;
	console.log(mul);
}

function clean(){
	var num1 = document.getElementById('fname').value;
	document.getElementById('result').textContent = 'Result is: ' + num1*2;
}
