import { Howl, Howler } from "howler";

const sound = new Howl({
    src: ["audio/piano.mp3"],
});
console.log(sound.state()); // loading

sound.once("load", () => {
    console.log(sound.state()); // loaded
    sound.unload();
    console.log(sound.state()); // unloaded
});
