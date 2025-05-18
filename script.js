const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer=document.querySelector('#main')

const speedUpHandler = () => {
    // alert("Speed up was clicked");
    const isVideoPresent= document.querySelector(".main .video");
    if(isVideoPresent!==null){
        video.defaultPlaybackRate = video.defaultPlaybackRate + 0.1;
    }
}

const handleInput = ()=>{
    console.log("Input is clicked");
    videoInput.click();
}
const acceptInputHandler = (obj) =>{
    const selectedVideo = obj.target.files[0];
    //src-> base64
    const link =  URL.createObjectURL(selectedVideo);
    const video = document.createElement("video");
    video.src = link;
    video.play();
    video.controls="true";
    video.setAttribute("class","video");
    videoPlayer.appendChild(video);
    video.volume=70;

    //how to inc/dec volume button
    // how to inc/dec speed up & down button
}

speedUp.addEventListener("click",speedUpHandler);
videoBtn.addEventListener("click",handleInput);
// when file is selected
videoInput.addEventListener("change", acceptInputHandler);