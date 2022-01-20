const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");
let streamObject;

const handleVideoData = (event) => {
    console.log(event.data);
}

const startRecording = () => {
    const videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start(1000);
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    // MediaRecorder  records in one chunk 
    // so after some time keep on stop recording and start again
    // so that stream can be made avaiable
}

const getVideo = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1280, height: 720 }
        });
        videoPreview.srcObject = stream;
        videoPreview.play();
        videoPreview.muted = true;
        recordBtn.innerHTML = "Stop recording";
        streamObject = stream;
        startRecording();
    } catch (error) {
        recordBtn.innerHTML = "Cannot record";
        recordBtn.removeEventListener("click", getVideo);
    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }
}

function init() {
    recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
    init();
}