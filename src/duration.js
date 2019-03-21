import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

console.log(sound.duration()); // 0 (まだ読み込んでいないため)
sound.once("load", () => {
    console.log(sound.duration()); // オーディオソースの長さを取得
});
