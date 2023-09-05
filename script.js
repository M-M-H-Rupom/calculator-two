//

const display= (value) => {
    document.getElementById("result").value += value;
}
const clearall = () => {
    document.getElementById("result").value = ""
 }
 const calculate = () => {
    const input = document.getElementById("result").value;
    
    try {
        const results = eval(input);
        if (typeof results === 'number' && isFinite(results)) {
            document.getElementById("result").value = results;
        } else {
            document.getElementById("result").value = "Error";
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

const deleteprevious = () => {
    var c = document.getElementById("result").value;
    var d = c.toString().slice(0,-1);
    document.getElementById("result").value = d;
}

