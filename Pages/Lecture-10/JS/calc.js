let cur = document.getElementById("current");
let res = document.getElementById("result");
cur.innerHTML = "0";


let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let divide = document.getElementById("/");
let multiply = document.getElementById("*");
let point = document.getElementById(".");
let equal = document.getElementById("=");


let val1 = "";
let val2 = "";
let isSecondOperand = false;
let decimalFlag = false;
let operator = "";
let result;

function updateDisplay() {
    if (!isSecondOperand) {
        cur.innerHTML = val1;
        res.innerHTML = val1;
    } else {
        cur.innerHTML = val2;
        res.innerHTML = val1 + " " + operator + " " + val2;
    }
}

function reset() {
    isSecondOperand = true;
    decimalFlag = false;
    cur.innerHTML = "0";
}

function numbers(number) {
    if (!isSecondOperand) {
        val1 += number;
    } else {
        val2 += number;
    }
    updateDisplay();
}

function operation(oper) {
    operator = oper;
    res.innerHTML = val1 + " " + operator + " ";
    reset();
}

function decimal() {
    if (!decimalFlag) {
        if (!isSecondOperand) {
            val1 += ".";
        } else {
            val2 += ".";
        }
        updateDisplay();
        decimalFlag = true;
    }
}

function calculate() {
    if (val2 === "") {
        return;
    }

    let operand1 = parseFloat(val1);
    let operand2 = parseFloat(val2);

    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
        default:
            return;
    }

    res.innerHTML = val1 + " " + operator + " " + val2 + " = " + result;
    cur.innerHTML = result;
    val1 = result.toString();
    val2 = "";
    decimalFlag = !Number.isInteger(result);
    isSecondOperand = false;
}

function Keyboard(event){
    let key = event.key;
    if (/[0-9]/.test(key)) {
        numbers(key);
    }
    else if (key === "+") {
        operation("+");
    } 
    else if (key === "-") {
        operation("-");
    }
     else if (key === "*") {
        operation("*");
    } 
    else if (key === "/") {
        operation("/");
    } 
    else if (key === ".") {
        decimal();
    } 
    else if (key === "Enter" || key === "=") {
        calculate();
    }
}

document.addEventListener("keydown", Keyboard);



// Event listeners
zero.addEventListener("click", ()=>numbers("0"));
one.addEventListener("click", ()=>numbers("1"));
two.addEventListener("click", ()=>numbers("2"));
three.addEventListener("click", ()=>numbers("3"));
four.addEventListener("click", ()=>numbers("4"));
five.addEventListener("click", ()=>numbers("5"));
six.addEventListener("click", ()=>numbers("6"));
seven.addEventListener("click", ()=>numbers("7"));
eight.addEventListener("click", ()=>numbers("8"));
nine.addEventListener("click", ()=>numbers("9"));
plus.addEventListener("click", ()=>operation("+"));
minus.addEventListener("click", ()=>operation("-"));
divide.addEventListener("click", ()=>operation("/"));
multiply.addEventListener("click", ()=>operation("*"));
point.addEventListener("click", decimal);
equal.addEventListener("click", calculate);
