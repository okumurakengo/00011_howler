import { Howl, Howler } from "howler";

const sound = new Howl({
    src: [
        "audio/piano.ogg",
        "audio/piano.mp3",
    ]
});

document.body.insertAdjacentHTML("afterbegin", '<button>play</button>')
document.querySelector("button").addEventListener("click", e => sound.play() );
