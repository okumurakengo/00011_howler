import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: () => {
        console.log("Finished!");
    }
});
