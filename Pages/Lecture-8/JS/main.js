function except1() {
    let a = document.getElementById("p1");
    a.innerHTML = "";
    let b = document.getElementById("textbox1").value;

    try {
        if (b === "") {
            throw "empty";
        } else if (b < 6) {
            throw "Number is too small";
        } else if (b > 30) {
            throw "Number is too big";
        } else if (isNaN(b)) {
            throw "Not a Number";
        } else {
            a.innerHTML = "Correct";
        }
    } catch (e) {
        a.innerHTML = e;
    }
}

function checkdiv() {
    let c = document.getElementById("p2");
    c.innerHTML = "";
    let num1 = document.getElementById("textbox2").value;
    let num2 = document.getElementById("textbox3").value;

    try {
        if (num1 === "" || num2 === "") {
            throw "Please enter a number";
        } else if (num2 == 0) {
            throw "Cannot divide by zero";
        } else if (isNaN(num1) || isNaN(num2)) {
            throw "Please only enter numbers";
        } else {
            c.innerHTML = num1 + " / " + num2 + " = " + num1 / num2;
        }
    } catch (e) {
        c.innerHTML = e;
    }
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function getfactorial() {
    let d = document.getElementById("p3");
    let num = parseInt(document.getElementById("textbox4").value);

    if (!isNaN(num) && num >= 0) {
        let ans = factorial(num);
        d.innerHTML = "Factorial of " + num + " = " + ans;
    } else {
        d.innerHTML = "Please enter a non-negative number";
    }
}
