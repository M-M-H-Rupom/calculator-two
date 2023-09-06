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
        mydisplay = eval(mydisplay).toString();
        updateDisplay();
    } catch (error) {
        mydisplay = 'Error';
        updateDisplay();
    }
}
const deleteprevious = () => {
        var c = document.getElementById("result").value;
        var d = c.toString().slice(0,-1);
        document.getElementById("result").value = d;
}