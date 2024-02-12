let a;

function interval(){
    a=setInterval(show,10);
}

function show(){let date=new Date();
    document.getElementById("timetext").innerHTML=date;
}   

function stop1(){
clearInterval(a);
document.getElementById("timetext").innerHTML="Time Stopped!!!";

}