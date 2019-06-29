const BILLAMT = document.querySelector("#billamt");
const SERVICE_FEE = document.querySelector("#serviceQuality");
const  CALLBTN = document.querySelector("#calculate");
const PEOPLE = document.getElementById("peopleAtm");
const TOTAL = document.getElementById("tip");

function showText(){
	const serviceFee = (BILLAMT.value * SERVICE_FEE.value);
	const total = serviceFee + parseInt(BILLAMT.value);
    
	const totalEach = total / parseInt(PEOPLE.value);
	console.log(totalEach);
	TOTAL.innerText = totalEach;

}

CALLBTN.addEventListener("click", showText);