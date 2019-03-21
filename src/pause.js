import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", `
    <button id="play">再生</button>
    <button id="pause">一時停止</button>
`);

play.addEventListener("click", e => {
    sound.play() // 一時停止したところから再生
});
pause.addEventListener("click", e => {
    sound.pause(); // 一時停止
});
