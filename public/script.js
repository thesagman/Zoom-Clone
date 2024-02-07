

const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const myVideo = document.createElement('video')
myVideo.muted = true;


navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    AddvideoStream(myVideo, stream)
})


socket.emit('join-room', Room_id)

socket.on('user-connected', () => {
    connectTONewUser()
})

const connectTONewUser = () => {
    console.log('New User');
}


const AddvideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video)
}