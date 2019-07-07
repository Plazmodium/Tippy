const BILLAMT = document.querySelector("#billamt");
const SERVICE_FEE = document.querySelector("#serviceQuality");
const CALLBTN = document.querySelector("#calculate");
const PEOPLE = document.getElementById("peopleAtm");
const TOTAL = document.getElementById("tip");

document.querySelector("#totalTip").style.display = "none";
document.querySelector("#each").style.display = "none";

function showText(){

	if(BILLAMT.value === "" || SERVICE_FEE.value === 0 || PEOPLE.value === ""){
		alert("Please enter valid values");
		return;
	}else{
		const serviceFee = (BILLAMT.value * SERVICE_FEE.value);
		const total = serviceFee + parseInt(BILLAMT.value);

		const totalEach = total / parseInt(PEOPLE.value);
		console.log(totalEach);
		TOTAL.innerText = totalEach.toFixed(2);

		document.querySelector("#totalTip").style.display = "block";
		document.querySelector("#each").style.display = "block";
	}
}

CALLBTN.addEventListener("click", showText);

