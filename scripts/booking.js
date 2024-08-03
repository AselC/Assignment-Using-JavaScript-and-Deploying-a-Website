/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35, numberOfDaysSelected = 0, totalCost = 0;
var fullDaySpan = document.getElementById('full');
var halfDaySpan = document.getElementById('half');
var clearDaysBtn = document.getElementById('clear-button')
// Set variable to store selected days
var selectedDays = new Set();
// Yes
// After clicking 'clear days'



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeColor(elementId) {
    // Get the element by using the id passed as variable
    var element = document.getElementById(elementId);

    // Check whether a day element already contains the 'clicked' class
    if(!element.classList.contains('clicked')) {
        // If it doesn't contain, add 'clicked' class
        element.classList.add('clicked');
        // Increment number of days selected and calculate totalcost;
        numberOfDaysSelected++;
        totalCost+=costPerDay;

        // Add selected element to Set
        selectedDays.add(element);
    }
    console.log("costPerDay:",costPerDay);
    console.log("totalCost:",totalCost);
    console.log("selectedDays:",selectedDays);

    // Call calculate function to update total cost
    calculate();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
    // Loop through the selected days set and remove 'clicked' class
    selectedDays.forEach(function(element) {
        element.classList.remove('clicked')
    });
    // Reset selected to full-day
    halfDaySpan.classList.remove('clicked');
    fullDaySpan.classList.add('clicked');
    
    // Reset values to default
    costPerDay = 35;
    numberOfDaysSelected = 0;
    totalCost = 0;

    // Call calculate function to update total cost
    calculate();
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDayPrice() {
    // Set cost per day to 20 and recalculate totalcost
    costPerDay = 20;
    totalCost = costPerDay * numberOfDaysSelected;
    
    // add 'clicked' class to half-day element and remove from full-day element
    halfDaySpan.classList.add('clicked');
    fullDaySpan.classList.remove('clicked');

    // Call calculate function to update total cost
    calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const fullDayPrice = () => {
    // Revert cost per day back to 35 and recalculate totalcost
    costPerDay = 35;
    totalCost = costPerDay * numberOfDaysSelected;

    // remove 'clicked' class from half-day element and add to full-day element
    halfDaySpan.classList.remove('clicked');
    fullDaySpan.classList.add('clicked');
    calculate();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    document.getElementById('calculated-cost').innerHTML = totalCost;
}

