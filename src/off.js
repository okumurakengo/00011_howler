import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});
sound.on("volume", () => {
    console.log("volume!")
})

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');
button.addEventListener("click", e => {
    sound.play();
    setTimeout(() => sound.volume(0.2), 1000); // イベント実行される
    setTimeout(() => sound.off(), 2000); // 引数なしでoff()と実行すると全てのイベントを削除
    setTimeout(() => sound.volume(0.5), 3000); // イベント実行されない
});
