export default function webcamDetection(id){
   const $video = document.getElementById(id) ;
   console.log($video);
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then((stream) => {
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch((err) => {
            console.log(`sucedio un error: ${err}`);
        });
    }
}
