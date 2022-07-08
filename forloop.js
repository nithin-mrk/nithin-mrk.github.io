function demo(){
	var num1 = document.getElementById('fname').value;
	document.getElementById('result').textContent =num1;
}

function fun(){
	var a = 'Apple';
	a = a +'Banana';
	a = a + 'Orange';
	document.getElementById('result').textContent =a;
}

function fun1(){
	var b = 1;
	var b = b +3;
	var b = b+1;
	b++;
	var b =b+2;
	var b = b + " Is my lucky number";
	document.getElementById('result').textContent =b ;
}

function fun2(){
	var i = 0;
	
	var table = document.getElementById('fname').value ;
	var rows = document.getElementById('sname').value ;
	var name = 'Tabel of : '+ table;
	for(i=1;i<=rows;i++){
		name = name + '<br>' +  table + ' x ' + i + ' = ' + ( table * i);
	}
	document.getElementById('result').innerHTML = name;
	console.log(name);
}

function table(){
	var i = 0;
	var table1 = document.getElementById('fname').value ;
	var rows = document.getElementById('sname').value ;
	
	// Creating table and tbody tag
	var table_tag = document.createElement('table');
	var tbody_tag = document.createElement('tbody');
	
    // Inside Table tag inserting tbody tag
	table_tag.appendChild(tbody_tag);
	
	// Inside body tag inserting tbody tag
	document.getElementById('body').appendChild(table_tag);
	
	//Creating the tr and td tag 
	for(i=1;i<=rows;i++){
		var row_2 = document.createElement('tr');
		var row_2_data_1 = document.createElement('td');
		row_2_data_1.innerHTML = table1;
		var row_2_data_2 = document.createElement('td');
		row_2_data_2.innerHTML = "x";
		var row_2_data_3  = document.createElement('td');
		row_2_data_3.innerHTML = i;
		var row_2_data_4 = document.createElement('td');
		row_2_data_4.innerHTML = "=";
		var row_2_data_5 = document.createElement('td');
		row_2_data_5.innerHTML = i*table1;
		
		// appending the data to each row
		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.appendChild(row_2_data_4);
		row_2.appendChild(row_2_data_5);
		
		// inserting data to tbody tag
		tbody_tag.appendChild(row_2);
	}
}

