function process(){
	console.log('Good Morning');
}

function hello(){
	console.log('Hello World');
}

function print(){
	var fname = document.getElementById('firstname').value;
	console.log(fname)
}

function clone(){
	var sname = document.getElementById('firstname').value;
	document.getElementById('secondname').value = sname;
}

function clean(){
	document.getElementById('firstname').value = "";
	document.getElementById('secondname').value = "";
}

function reverse(){
	var rev = document.getElementById('firstname').value 
	var rev1 = document.getElementById('secondname').value 
	document.getElementById('firstname').value = rev1
	document.getElementById('secondname').value = rev
}