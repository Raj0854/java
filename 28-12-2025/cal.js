function numberInput(value) {
    document.getElementById("numberInput").value += value;
}

function clearFields() {
    document.getElementById("numberInput").value = "";
    document.getElementById("result").value = "";
}   
function cancelLast() {
    let currentValue = document.getElementById("numberInput").value;
    document.getElementById("numberInput").value = currentValue.slice(0, -1);
}

function num0() {
    document.getElementById("numberInput").value += "0";
}   
function num00() {
    document.getElementById("numberInput").value += "00";
}   
function num1() {
    document.getElementById("numberInput").value += "1";
}   
function num2() {
    document.getElementById("numberInput").value += "2";
}   
function num3() {
    document.getElementById("numberInput").value += "3";
}   
function num4() {
    document.getElementById("numberInput").value += "4";
}   
function num5() {
    document.getElementById("numberInput").value += "5";
}   
function num6() {
    document.getElementById("numberInput").value += "6";
}   
function num7() {
    document.getElementById("numberInput").value += "7";
}   
function num8() {
    document.getElementById("numberInput").value += "8";
}   
function num9() {
    document.getElementById("numberInput").value += "9";
}   
function addNumber() {
    document.getElementById("numberInput").value += "+";
}   
function subtractNumber() {
    document.getElementById("numberInput").value += "-";
}   
function multiplyNumber() {
    document.getElementById("numberInput").value += "*";
}   
function divideNumber() {
    document.getElementById("numberInput").value += "/";
}   
function calculateResult() {
    let expression = document.getElementById("numberInput").value;
    try {   
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}   