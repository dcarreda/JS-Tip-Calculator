const BILLAMT = document.querySelector("#billamt"); //or document.getElementById("billamnt") //The # its because billamt is an id
const CALBUTTON = document.querySelector("#calculate");
const PEOPLEAMT = document.querySelector("#peopleamt");
const TIPPERC = document.querySelector("#serviceQuality");

const SHOWTOTAL = document.querySelector("#tip");
const SHOWEACH = document.querySelector("#totaleach");

document.querySelector("#totalTip").style.display = "none";
function calculateTip(){

    if(BILLAMT.value === "" || TIPPERC.value === 0){
        alert("please enter valid values");
        return;
    }
    if(PEOPLEAMT.value=== ""){
        PEOPLEAMT.value = 1;
    }
    document.querySelector("#totalTip").style.display = "block";

    var temp = 0.0;
    //Calculating the tip
    var tip = parseFloat(BILLAMT.value) * parseFloat(TIPPERC.value);
    tip=tip.toFixed(2);
    var total = parseFloat(tip) + parseInt(BILLAMT.value);

    
    document.querySelector("#tip").innerHTML=total;

    //Total Each tip
    var total_e = total / parseInt(PEOPLEAMT.value);
    total_e=total_e.toFixed(2);
    document.querySelector("#totaleach").innerHTML=total_e;

    //console.log("total tip each is: " + total_e);
}

CALBUTTON.addEventListener('click', calculateTip); // if showResult(), then the function is called right now, and not in an event case
