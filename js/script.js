const BILLAMT = document.querySelector("#billamt"); //or document.getElementById("billamnt") //The # its because billamt is an id
const CALBUTTON = document.querySelector("#calculate");
const PEOPLEAMT = document.querySelector("#peopleamt");
const TIPPERC = document.querySelector("#serviceQuality");

function showResult(){
    console.log(BILLAMT.value);
    console.log(TIPPERC.value);
    console.log(PEOPLEAMT.value);

}

CALBUTTON.addEventListener('click', showResult); // if showResult(), then the function is called right now, and not in an event case
