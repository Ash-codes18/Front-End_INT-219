let slides = document.querySelectorAll(".sliding");
let count = 0;

function changeSlide(direction) {
    count += direction;
    if (count >= slides.length) {
        count = 0;
    } else if (count < 0) {
        count = slides.length - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = `${(i - count) * 100}%`;
    }
}
