import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');

button.addEventListener("click", e => {
    sound.play();
    sound.fade(1, 0, 5000); // 5秒かけて音量を 1 -> 0 にする
});
