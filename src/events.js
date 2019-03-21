import { Howl, Howler } from 'howler';

const sound = new Howl({
    src: ["audio/piano.mp3"],
});
sound.on("load", () => console.log("load!"));
sound.on("unlock", () => console.log("unlock!")); // タッチ/クリックイベントによってオーディオが自動的にロック解除されたときに発生
sound.on("play", () => console.log("play!"));
sound.on("end", () => console.log("end!"));
sound.on("pause", () => console.log("pause!"));
sound.on("stop", () => console.log("stop!"));
sound.on("mute", () => console.log("mute!"));
sound.on("volume", () => console.log("volume!"));
sound.on("rate", () => console.log("rate!"));
sound.on("seek", () => console.log("seek!"));
sound.on("fade", () => console.log("fade!"));

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');
button.addEventListener("click", e => {
    sound.play();
    setTimeout(() => sound.pause(), 2000); // pauseイベント発生
    setTimeout(() => sound.play(), 4000); // pauseからの再生後もplayイベント発生
    setTimeout(() => sound.stop(), 6000); // stopイベント発生
    setTimeout(() => sound.play(), 8000);
    setTimeout(() => sound.mute(true), 10000); // muteイベント発生
    setTimeout(() => sound.mute(false), 12000); // muteイベント発生
    setTimeout(() => sound.volume(0.5), 14000); // volumeイベント発生
    setTimeout(() => sound.rate(1.2), 16000); // rateイベント発生
    setTimeout(() => sound.seek(5), 16000); // seedイベント発生
    setTimeout(() => sound.fade(0.5, 1, 1000), 18000); // フェードイン/フェードアウトを終了したときに発生
});
