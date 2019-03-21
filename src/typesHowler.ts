import { Howl, Howler } from "howler";

const sound: Howl = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');
document.getElementById("button").addEventListener("click", e => {
    sound.play();
});
