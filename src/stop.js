import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", `
    <button id="play">再生</button>
    <button id="stoped">再生終了</button>
`);

play.addEventListener("click", e => {
    sound.play() // 最初から再生される
});
stoped.addEventListener("click", e => {
    sound.stop(); // 再生を終了し、シークを0にする
});
