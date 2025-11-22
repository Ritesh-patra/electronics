const watchDemoBtn = document.getElementById("watchDemoBtn");
const videoPopup = document.getElementById("videoPopup");
const closePopup = document.getElementById("closePopup");
const popupVideo = document.getElementById("popupVideo");

watchDemoBtn.addEventListener("click", () => {
    // popup show
    videoPopup.classList.remove("hidden");

    // play from start with sound
    popupVideo.currentTime = 0;
    popupVideo.muted = false;
    popupVideo.play();
});

closePopup.addEventListener("click", () => {
    // popup hide
    videoPopup.classList.add("hidden");

    // stop video completely (sound off)
    popupVideo.pause();
    popupVideo.currentTime = 0;
});
