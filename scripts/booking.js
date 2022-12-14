/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

var dailyRate = 35;
var dayCounter = 0;
var mon = document.getElementById("monday");
var tues = document.getElementById("tuesday");
var wed = document.getElementById("wednesday");
var thurs = document.getElementById("thursday");
var fri = document.getElementById("friday");
var clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeMon(){
    if (!mon.classList.contains("clicked")){
        mon.classList.add('clicked');
        dayCounter += 1;
        calculate();
    }
}
function changeTues(){
    if (!tues.classList.contains("clicked")){
        tues.classList.add('clicked');
        dayCounter += 1;
        calculate();
    }
}
function changeWed(){
    if (!wed.classList.contains("clicked")){
        wed.classList.add('clicked');
        dayCounter += 1;
        calculate();
    }
}
function changeThurs(){
    if (!thurs.classList.contains("clicked")){
        thurs.classList.add('clicked');
        dayCounter += 1;
        calculate();
    }
}
function changeFri(){
    if (!fri.classList.contains("clicked")){
        fri.classList.add('clicked');
        dayCounter += 1;
        calculate();
    }
}
mon.addEventListener("click", changeMon);
tues.addEventListener("click", changeTues);
wed.addEventListener("click", changeWed);
thurs.addEventListener("click", changeThurs);
fri.addEventListener("click", changeFri);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetButtons(){
    mon.classList.remove("clicked");
    tues.classList.remove("clicked");
    wed.classList.remove("clicked");
    thurs.classList.remove("clicked");
    fri.classList.remove("clicked");
    dayCounter = 0;
    calculate();
}
clearButton.addEventListener("click", resetButtons);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var halfDay = document.getElementById("half");
var fullDay = document.getElementById("full");
function halfDayService(){
    dailyRate = 20;
    calculate();
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
}
halfDay.addEventListener("click", halfDayService);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDayService(){
    dailyRate = 35;
    calculate();
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
}
fullDay.addEventListener("click", fullDayService);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    var totalCost = document.getElementById("calculated-cost");
    totalCost.innerHTML = dailyRate * dayCounter;
}
