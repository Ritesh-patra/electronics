    const watchDemoBtn = document.getElementById("watchDemoBtn");
    const videoPopup = document.getElementById("videoPopup");
    const closePopup = document.getElementById("closePopup");

    watchDemoBtn.addEventListener("click", () => {
        videoPopup.classList.remove("hidden");
    });

    closePopup.addEventListener("click", () => {
        videoPopup.classList.add("hidden");
    });
