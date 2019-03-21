import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
    volume: 0.5, // デフォルト:1 音量 0.0〜1.0
    html5: false, // デフォルト:fasle trueだとHTML5オーディオを強制
    loop: false, // デフォルト:false ループをするかしないか
    preload: true, // デフォルト:true Howlの定義時に自動でファイルを読み込むか
    autoplay: false, // デフォルト:false 自動再生するか
    mute: false, // デフォルト:false ミュートするか
    sprite: {
        hoge: [30000, 5000, true], // sound.play("hoge") とすると開始30秒の位置から5秒間再生する、第３引数はloopするかしないか
    },
    rate: 1.5, // デフォルト:1.0 再生速度 0.5〜4.0
    pool: 5, // デフォルト:5 非アクティブサウンドのプールのサイズ。公式によると、通常これを変更する必要はないとのこと
    format: ["mp3"], // 通常は拡張子からファイル形式を自動的にするが、抽出がうまくいかない状況でも指定することができる
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');
button.addEventListener("click", e => {
    sound.play("hoge");
});
