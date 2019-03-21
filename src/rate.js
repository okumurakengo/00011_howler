import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');

button.addEventListener("click", e => {
    sound.play();
    sound.rate(2); // 速度を変更する 0.5 〜 4.0 の間で指定する(1だとデフォルトの速度)
});
