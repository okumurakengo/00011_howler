import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
    sprite: {
        play1: [0, 3000], // 開始から3秒間を再生
        play2: [3000, 1000], // 開始3秒から1秒間再生
        play3: [60000, 5000], // 開始1分から5秒間再生
    }
});
  
document.body.insertAdjacentHTML("afterbegin", `
    <button id="play1">play1</button>
    <button id="play2">play2</button>
    <button id="play3">play3</button>
`);

play1.addEventListener("click", e => sound.play("play1") );
play2.addEventListener("click", e => sound.play("play2") );
play3.addEventListener("click", e => sound.play("play3") );
