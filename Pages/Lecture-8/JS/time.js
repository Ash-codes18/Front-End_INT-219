let a;

function interval(){
    a=setInterval(show,100);
}

function show(){
    document.getElementById("timetext").innerHTML=Date();
}   

function stop1(){
clearInterval(a);
document.getElementById("timetext").innerHTML="Time Stopped!!!";

}