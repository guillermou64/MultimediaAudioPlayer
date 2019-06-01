let ap = null;

function start(){
    ap = new AudioPlayer({
        gui:{
            totalTime: {value: "0:00", DOMElement: document.querySelector(".totalTime")},
            currentTime: {value: "0:00", DOMElement: document.querySelector(".currentTime")},
            progressBar: {value: "0:00", DOMElement: document.querySelector(".progressBar")},
            albumCover: {value: null, DOMElement: document.querySelector("#player")},
        },
        buttons:{
            playPause: document.querySelector(".play"),
            volume: document.querySelector(".volume")
        }, 
        songs:[new Song('Old Town Road','LIL U','assets/OTRcover.jpeg','songs/1.mp3')]//cargamos un objeto de clase song
    });
}