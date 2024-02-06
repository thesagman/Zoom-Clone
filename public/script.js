const videoGrid = document.getElementById('video-grid')
const myVideo = document.createElement('video')
myVideo.muted = true;




navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    AddvideoStream(myVideo, stream)
})



const AddvideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video)
}