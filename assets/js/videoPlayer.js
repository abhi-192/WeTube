const videoContainer = document.getElementById("jsVideoPlayer");
let videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");

function handlePlayClick() {
    if(videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
        volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    }
    else{
        videoPlayer.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
        volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    }
}

function handleVolumeClick() {
    if(videoPlayer.muted){
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    else{
        videoPlayer.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

function init() {
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click")
}

videoContainer