import { Howl, Howler } from "howler";

// 全てのボリュームを0.5にする
Howler.volume(0.5);

const sound1 = new Howl({
    src: ["audio/piano.mp3"],
});
const sound2 = new Howl({
    src: ["audio/piano.ogg"],
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');
button.addEventListener("click", e => {
    sound1.play();
    sound2.play();
    setTimeout(() => Howler.unload(), 3000); // 全て再生中止する
});
