let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let mid = document.getElementById("centered");

function red() {
    p1.style.backgroundColor = 'tomato';
}

function blue() {
    p2.style.backgroundColor = 'skyblue';
}

function green() {
    p3.style.backgroundColor = 'lightgreen';
}

function pink() {
    p4.style.backgroundColor = 'pink';
}

function yellow() {
    p5.style.backgroundColor = 'gold';
}

function purple() {
    p6.style.backgroundColor = 'thistle';
}

function switcher() {
    const colors = ['tomato', 'skyblue', 'lightgreen', 'pink', 'gold', 'thistle'];
    shuffleArray(colors);

    p1.style.backgroundColor = colors[0];
    p2.style.backgroundColor = colors[1];
    p3.style.backgroundColor = colors[2];
    p4.style.backgroundColor = colors[3];
    p5.style.backgroundColor = colors[4];
    p6.style.backgroundColor = colors[5];
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


p1.addEventListener("mouseover", red);
p2.addEventListener("mouseover", blue);
p3.addEventListener("mouseover", green);
p4.addEventListener("mouseover", pink);
p5.addEventListener("mouseover", yellow);
p6.addEventListener("mouseover", purple);
mid.addEventListener("click", switcher);
