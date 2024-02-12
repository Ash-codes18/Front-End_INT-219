let a = document.querySelector("h1");
let b = document.querySelector("body");
let butt=document.getElementById("butt");

a.innerHTML = "Let's get it started";

function hclick() {
    a.innerHTML = "Double click to revert back...";
}
function hhclick() {
    a.innerHTML = "Let's get it started";
}

function defcolor() {
    a.style.color = 'pink';
}

function remcolor() {
    a.style.color ='';
}



a.addEventListener("click", hclick);
a.addEventListener("mouseover", defcolor);
a.addEventListener("dblclick", hhclick);
butt.addEventListener("click",remcolor);

let max;
let para = document.querySelector("p");


function getmax() {
    let num1 = document.getElementById("no1").value;
    let num2 = document.getElementById("no2").value;
    let num3 = document.getElementById("no3").value;

    if(num1 > num2 && num1 > num3){
        max = num1;
    } else if(num2 > num1 && num2 > num3){
        max = num2;
    } else {
        max = num3;
    }

    para.innerHTML = max;
}

function maxtxt() {
    para.innerHTML = "Click on the text to get the max element";
}

function maxremover() {
    para.innerHTML = "Display the greatest number out of 3";
}

para.addEventListener("click", getmax);
para.addEventListener("mouseover", maxtxt);
para.addEventListener("mouseout", maxremover);


let circ=document.getElementById("circle");
let cirbutt=document.getElementById("cirbutt");

let val=0;

function changecircle(){
    if(val%3==0){
        circ.style.backgroundColor='purple';
        val++;
    }
    else if(val%3==1){
        circ.style.backgroundColor='coral';
        val++;
    }
    else{
        circ.style.backgroundColor='';
        val++;
    }
}


cirbutt.addEventListener("click",changecircle);




let sq1=document.getElementById("sq1");
let sq2=document.getElementById("sq2");

let sqr=document.getElementById("sqr");
let sqy=document.getElementById("sqy");
let sqg=document.getElementById("sqg");
let rem=document.getElementById("rem");


function fnr(){
    sq1.style.backgroundColor='green';
    sq2.style.backgroundColor='yellow';
}

function fny(){
    sq1.style.backgroundColor='red';
    sq2.style.backgroundColor='green';
}

function fng(){
    sq1.style.backgroundColor='yellow';
    sq2.style.backgroundColor='red';
}

function remo(){
    sq1.style.backgroundColor='';
    sq2.style.backgroundColor='';
}



sqr.addEventListener("click",fnr);
sqy.addEventListener("click",fny);
sqg.addEventListener("click",fng);
rem.addEventListener("click",remo);



let img=document.getElementById("einsimg");
let imgcount=0;

function changeimg(){
    if(imgcount%2==0){
        document.getElementById("einsimg").src="assets/pic1.jpg";
        imgcount++;
    }
    else{
        document.getElementById("einsimg").src="assets/pic2.jpg";
        imgcount++;
    }

}

img.addEventListener("click",changeimg);


let q=document.getElementById("quote");

function changeq(){
    q.innerHTML="\"The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.\""
}


q.addEventListener("click",changeq);

















