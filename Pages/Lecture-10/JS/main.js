let cnt=document.getElementById("counter");
let inc=document.getElementById("inc");
let dec=document.getElementById("dec");
let res=document.getElementById("res");
let stopi=document.getElementById("stopinc");
let stopd=document.getElementById("stopdec");

let count=0;
cnt.innerHTML=count;

function incval(){
    count++;
    cnt.innerHTML=count;
}

function decval(){
    count--;
    cnt.innerHTML=count;
}

function reset(){
    count=0;
    cnt.innerHTML=count;
}

function changecolor1(){
    cnt.style.color='green';
} 
function changecolor2(){
    cnt.style.color='red';
} 
function changecolor3(){
    cnt.style.color='yellow';
} 

function removecolor(){
    cnt.style.color=''
}

function stopinc(){
    inc.removeEventListener("click",incval);
}

function stopdec(){
    dec.removeEventListener("click",decval);
}

inc.addEventListener("click",incval);
dec.addEventListener("click",decval);
res.addEventListener("click",reset);

inc.addEventListener("mouseover",changecolor1);
dec.addEventListener("mouseover",changecolor2);
res.addEventListener("mouseover",changecolor3);

inc.addEventListener("mouseleave",removecolor);
dec.addEventListener("mouseleave",removecolor);
res.addEventListener("mouseleave",removecolor);


stopi.addEventListener("click",stopinc);
stopd.addEventListener("click",stopdec);



let a = document.createElement('p');
let b=document.createTextNode("Creating a para from js.");
document.body.append(b);


let div = document.createElement('div');
let h3 = document.createElement('h3');
let para = document.createElement('p');
// div.style.backgroundColor='red';
h3.innerHTML='Ashmit Mehta'
para.innerHTML = 'Reg No: 12212469';
div.appendChild(h3);
div.appendChild(para);
document.body.append(div);

