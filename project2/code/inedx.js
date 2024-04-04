function playSound(soundUrl) {
    var audio = new Audio(soundUrl);
    audio.play();
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 87) {
        playSound('sounds/tom-1.mp3');
    } else if (event.keyCode === 65) {
        playSound('sounds/tom-2.mp3');
    } else if (event.keyCode === 83) {
        playSound('sounds/tom-3.mp3');
    } else if (event.keyCode === 68) {
        playSound('sounds/tom-4.mp3');
    } else if (event.keyCode === 74) {
        playSound('sounds/crash.mp3');
    } else if (event.keyCode === 75) {
        playSound('sounds/kick.mp3');
    } else if (event.keyCode === 76) {
        playSound('sounds/snare.mp3');
    }
});