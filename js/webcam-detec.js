export default function webcamDetection(id, btnOn, btnOff){
   const $video = document.getElementById(id) ;

   const cameraOn = () => {
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
    //
    // const cameraOff = () => {
    //     const stream = videoElem.srcObject;
    //     if (stream) {
    //       const tracks = stream.getTracks();
    //
    //       tracks.forEach(function (track) {
    //         track.stop();
    //       });
    //
    //       videoElem.srcObject = null;
    //    }
    // }


    document.addEventListener('click', (e) => {
        if(e.target.matches(btnOn)){
            cameraOn();
        } else {
            // cameraOff();
        }
    })

    
}
