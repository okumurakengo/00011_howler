import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

// 最初の呼び出し後にリスナーをクリアします (このイベントは一回しか実行されない)
sound.once("load", () => {
    console.log("Load!");
});

// サウンドの再生が終了したときに発生します。
sound.on("end", () => {
    console.log("Finished!");
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">play</button>')
button.addEventListener("click", e => sound.play() );
