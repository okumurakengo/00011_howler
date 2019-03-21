import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
    preload: false,
});
sound.on("load", () => {
    console.log("load!") // ↓のクリックの後にこのイベントが実行されることになる
})

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');
button.addEventListener("click", e => {
    sound.load();
    sound.play();
});
