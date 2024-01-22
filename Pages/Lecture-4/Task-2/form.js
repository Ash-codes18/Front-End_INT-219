function check() {

    let a = document.getElementById("User").value;
    if (a == "") {
        alert("Username Cannot be Empty!");
        document.getElementById("erruser").innerHTML = "Please Enter Your Username";
        document.getElementById("User").style.backgroundColor = 'red';
        return false;
    }

    if(!isNaN(a)){
        alert("Username Cannot be a number!");
        document.getElementById("erruser").innerHTML = "Please Enter a Valid Username";
        document.getElementById("User").style.backgroundColor = 'red';
        return false;

    }
    
    let b = document.getElementById("pass").value;
    if (b == "") {
        alert("Password Cannot be Empty!")
        document.getElementById("errpass").innerHTML = "Please Enter Your Password";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }

    if(b.length < 6){
        alert("Please Enter a Valid Password");
        document.getElementById("errpass").innerHTML = "Password Should have more than 5 characters!";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }


    let c = document.getElementById("num").value;
    if (c == "") {
        alert("Number Cannot be Empty!")
        document.getElementById("errnum").innerHTML = "Please Enter Your Number";
        document.getElementById("num").style.backgroundColor = 'red';
        return false;
    }

    if(isNaN(c)){
        alert("Number can only Consist of Digits")
        document.getElementById("errnum").innerHTML = "Please Only enter a Number!";
        document.getElementById("num").style.backgroundColor = 'red';
        return false;
    }

    if(c.toString().length > 10){
        alert("Please Enter a Valid number");
        document.getElementById("errnum").innerHTML = "Number should have less than 11 digits !";
        document.getElementById("num").style.backgroundColor = 'red';
        return false;
    }

    if(c.toString().length < 10){
        alert("Please Enter a Valid number");
        document.getElementById("errnum").innerHTML = "Number should have 10 digits !";
        document.getElementById("num").style.backgroundColor = 'red';
        return false;
    }


    let d = document.getElementById("add").value;
    if (d == "") {
        alert("Address Cannot be Empty!");
        document.getElementById("erradd").innerHTML = "Please Enter Your Address";
        document.getElementById("add").style.backgroundColor = 'red';
        return false;
    }


    return true;
}
