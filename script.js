const videoCont = document.querySelector(".videoCont");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const video = document.querySelectorAll("video");

let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100;
    videoCont.style.transform = `translateX(${offset}%)`;
}

rightBtn.addEventListener("click", () => {
    if (currentIndex < video.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first video
    }
    updateSlider();
});

leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = videos.length - 1; // Loop back to the last video
    }
    updateSlider();
});

// Play video on hover
video.forEach(video => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});

// Initial styling for smooth transitions
videoCont.style.display = "flex";
videoCont.style.transition = "transform 0.5s ease-in-out";
video.forEach(video => video.style.width = "100%");
