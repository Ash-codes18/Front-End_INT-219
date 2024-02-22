var images = document.getElementsByClassName("slider");
var currentIndex = 0;

function showImage() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = i === currentIndex ? "block" : "none";
        // images[i].style.transform = i === currentIndex ? "translateY(0)" : "translateY(-100%)";
    }
}

function changeImage(offset) {
    currentIndex = (currentIndex + offset + images.length) % images.length;
    showImage();
}

document.getElementById("prev").addEventListener("click", function(){
    changeImage(-1);
});

document.getElementById("next").addEventListener("click", function() {
    changeImage(1);
});

// showImage();
