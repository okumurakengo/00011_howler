import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", `
    <button id="play">再生</button>
    <button id="mute">ミュート</button>
    <button id="notmute">ミュート解除</button>
`);

play.addEventListener("click", e => {
    sound.play();
});
mute.addEventListener("click", e => {
    sound.mute(true); // ミュート
});
notmute.addEventListener("click", e => {
    sound.mute(false); // ミュート解除
});
