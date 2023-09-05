//

const display= (value) => {
    document.getElementById("result").value += value;
}
const clearall = () => {
    document.getElementById("result").value = ""
 }
const calculate = () => {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}
const deleteprevious = () => {
    var c = document.getElementById("result").value;
    var d = c.toString().slice(0,-1);
    document.getElementById("result").value = d;
}