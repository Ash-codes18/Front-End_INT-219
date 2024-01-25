function check() {
    let a = document.getElementById("pass").value;
    
    if (a==="") {
        alert("Password cannot be empty!");
        document.getElementById("err").innerHTML = "Please enter your password";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }

    if (a.length<8 || a.length>64) {
        alert("Password should have between 8 and 64 characters");
        document.getElementById("err").innerHTML = "Please enter a valid length password";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }

    let upper = false;
    let lower = false;
    let number = false;
    let special = false;

    let specials = "~!@#$%^&*()_+=-/.,][{}\\|*";

    for (let i = 0; i < a.length; i++) {
        if(a[i]===a[i].toUpperCase()){
            upper=true;
        }

        if(a[i]===a[i].toLowerCase()){
            lower=true;
        }

        if(!isNaN(parseInt(a[i]))){
            number=true;
        }

        if(specials.includes(a[i])){
            special=true;
        }
    }

    

    if (!upper) {
        alert("There is no uppercase letter in the password!");
        document.getElementById("err").innerHTML = "Please enter an uppercase letter";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }

    if (!lower) {
        alert("There is no lowercase letter in the password!");
        document.getElementById("err").innerHTML = "Please enter a lowercase letter";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }

    if (!number) {
        alert("There is no number in the password!");
        document.getElementById("err").innerHTML = "Please enter a number";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }

    if (!special) {
        alert("There is no special character in the password!");
        document.getElementById("err").innerHTML = "Please enter a special character";
        document.getElementById("pass").style.backgroundColor = 'red';
        return false;
    }

    return true;
}
