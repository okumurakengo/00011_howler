import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');
button.addEventListener("click", e => {
    sound.play();
    sound.seek(30); // 再生位置を30秒の部分に移動
});
