function sort(){
	var sort1 = document.getElementById('fname').value;
	var sort2 = document.getElementById('lname').value;
	if(sort2.length > sort1.length){
		document.getElementById('fname').value = sort2;
		document.getElementById('lname').value = sort1;
	}	
}

function sortAscending(){
	var sortAscending1 = document.getElementById('fname').value;
	var sortAscending2 = document.getElementById('lname').value;
	
	if(sortAscending1.length > sortAscending2.length){
		document.getElementById('fname').value = sortAscending2;
		document.getElementById('lname').value = sortAscending1;
	}
}

