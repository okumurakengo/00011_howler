import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", `
    <button id="play">再生</button>
    <button id="button">音量を0.5にする</button>
`);

play.addEventListener("click", e => {
    sound.play();
});
button.addEventListener("click", e => {
    sound.volume(0.2); // ボリュームは 0.0 〜 1.0 の間で設定できる
});
