var calcDisplay = ""
var kalkulasic = (x*(9/5)+32)
var kalkulasif =(x-32*(5/9))

function setValues(){
	a = Number(document.getElementById('input').value)
	b = Number(document.getElementById('input').value)
	kalkulasic = (a*(9/5)+32)
	kalkulasif =(b-32*(5/9))
}
function konversi {
	setValues();
	kalkulasic = (a*(9/5)+32)
	kalkulasif =(b-32*(5/9))
    
    document.getElementById ("input").innerHTML = result;
}

function reset {
    document.getElementsByClassName ("celsius").innerHTML.value= "";
	document.getElementsByClassName ("fahrenheit").innerHTML.value= "";
	document.getElementsByClassName ("result").innerHTML.value= "";
}