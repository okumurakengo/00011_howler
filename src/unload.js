import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});

document.body.insertAdjacentHTML("afterbegin", '<button id="button">再生</button>');
button.addEventListener("click", e => {
    sound.play();
    setTimeout(() => { 
        sound.unload()  // 再生終了される
        console.log(sound.state()) // unloaded
    }, 2000);
});
