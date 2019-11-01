// The add button function

function add(a) {
	document.getElementById('pop').style.display = "block";
var b = new Date();
var q = document.getElementById('wel').value;

 wel.value = b.toDateString() ;
localStorage.startH = JSON.stringify(q);

 var q = new Date();
var b = document.getElementById('wel1').value;

 b = q.toTimeString() ;
 var t = setTimeout(unstart , 500);
	localStorage.startT = JSON.stringify(b);
	console.log(wel1.value);
}

function cl() {
	document.getElementById('pop').style.display = "none";
}

// Time and Date section

function unstart() {
	var b = new Date();
var q = document.getElementById('wel').value;

 wel.value = b.toDateString() ;
var b = new Date();
var q = document.getElementById('wel1').value;

 wel1.value = b.toTimeString() ;
 var t = setTimeout(unstart , 500);

}

// The category adding section

function include() {
document.getElementById('pop').style.display = "none";


var m = Math.random();
var no = Math.floor(m*1000);
var w ="clp" + no;
console.log(w);

	var array=[];
	var arr = document.getElementsByClassName('wept').value;
array.push(arr);
for (var i = 0; i < arr; i++) {
	 arr[i].value = array[i];
console.log(array);

}
	
	result.innerHTML += '<div id="'+w+no+'"><p> '+ gory.value+'<br> <input class="wept" type="number" id="'+w+'" disabled><br>'+cription.value+'<br> <button onclick="ayo("'+no+'")">+</button>   <button onclick="ay("'+no+'")">-</button> '+'   <button onclick="yo("'+no+'")">Trash</button></p></div>';


for (var i = 0; i < arr; i++) {
	array[i]=arr[i].value;
	console.log(arr[i].value);
}

}


function ayo(a) {
	var r = "clp" + a;

document.getElementById(r).value = (++ document.getElementById(r).value)  ;
alert("why");
 console.log(r);
}
function ay(b) {
	var we = "clp"+a;
	we.value = (++ we.value);
	console.log(we);
}

// The history function section
function hist() {
	history.innerHTML = localStorage.getItem(startT) + localStorage.getItem(startH);

}
