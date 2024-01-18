function check() {
    let a = document.getElementById("User").value;
    if (a == "") {
        document.getElementById("erruser").innerHTML = "Please Enter Your Username!";
        document.getElementById("User").style.backgroundColor = 'red';
        return false;
    }
    
    let b = document.getElementById("pass").value;
    if (b == "") {
        document.getElementById("errpass").innerHTML = "Password Cannot be Empty!";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }

    if(b.length < 6){
        document.getElementById("errpass").innerHTML = "Password Should have more than 5 characters!";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }


    let c = document.getElementById("num").value;
    if (c == "") {
        document.getElementById("errnum").innerHTML = "Number Cannot be Empty!";
        document.getElementById("num").style.backgroundColor = 'red';
        return false;
    }

    if(isNaN(c)){
        document.getElementById("errnum").innerHTML = "Please Only enter a Number!";
        document.getElementById("num").style.backgroundColor = 'red';
        return false;
    }

    if(c.toString().length > 10){
        document.getElementById("errnum").innerHTML = "Number should have less than 11 digits !";
        document.getElementById("num").style.backgroundColor = 'red';
        return false;
    }

    if(c.toString().length < 10){
        document.getElementById("errnum").innerHTML = "Number should have 10 digits !";
        document.getElementById("num").style.backgroundColor = 'red';
        return false;
    }

    return true;
}
