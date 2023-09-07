let mydisplay = ''; 
let myOperator = true; 

let updateDisplay = () => {
    document.getElementById('result').value = mydisplay;
}

const display =(value) => {
    if (myOperator || !isNaN(value)) {
        mydisplay += value;
        if (!isNaN(value)) {
            myOperator = true; 
        } else {
            myOperator = false; 
        }
        updateDisplay();
    }
}

const clearall = () => {
    mydisplay = '';
    myOperator = true; 
     updateDisplay();
}

const calculate = () => {
    try {
        if (mydisplay.includes("√")) {
            // Handle square root calculation
            const numberToSquareRoot = parseFloat(mydisplay.replace("√", ""));
            if (!isNaN(numberToSquareRoot) && numberToSquareRoot >= 0) {
                mydisplay = Math.sqrt(numberToSquareRoot).toString();
            } else {
                mydisplay = 'Error';
            }
        } else if (/[\d.]$/.test(mydisplay)) {
            // Handle other calculations
            mydisplay = eval(mydisplay).toString();
        } else {
            mydisplay = mydisplay.replace(/\([^)]*\)$/, '');
        }
        updateDisplay();
    } catch (error) {
        mydisplay = 'Error';
        updateDisplay();
    }
}




const deleteprevious = () => {
    var displayElement = document.getElementById("result");
    var currentValue = displayElement.value;
    if (currentValue.length > 0) {
        var newValue = currentValue.slice(0, -1);
        displayElement.value = newValue;
        mydisplay = newValue; 
        myOperator = !isNaN(newValue[newValue.length - 1]);
    }
}
