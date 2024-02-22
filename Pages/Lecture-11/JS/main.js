let left = document.getElementById("leftear");
let right = document.getElementById("rightear");
let mouth = document.getElementById("mouth");
let eyes = document.getElementsByClassName("eyes");
let face = document.querySelector(".face");

function cred() {
    right.style.backgroundColor = 'red';
}

function cblue() {
    left.style.backgroundColor = 'blue';
}

function cbeige() {
    face.style.backgroundColor = 'beige';
}

function bgcol() {
    for (let eye of eyes) {
        eye.style.backgroundColor = 'black';
    }
}

left.addEventListener("click", cred);
right.addEventListener("click", cblue);
mouth.addEventListener("click", cbeige);
for (let eye of eyes) {
    eye.addEventListener("click", bgcol);
}
