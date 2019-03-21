import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">play</button>')
button.addEventListener("click", e => {
    // 同じサウンドを2回再生する
    const id1 = sound.play();
    const id2 = sound.play();

    // 1つ目の再生は10秒かけて音量を 1 -> 0 に変化させる
    sound.fade(1, 0, 10000, id1);
    // 2つ目の再生は再生速度を速くする
    sound.rate(1.5, id2);
});
