import { Howl, Howler } from 'howler';

var sound = new Howl({
    src: [
        '../audio/piano.ogg',
        '../audio/piano.mp3',
    ]
});

button.addEventListener("click", e => sound.play() );
