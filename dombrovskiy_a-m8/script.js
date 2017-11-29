(function () {
    'use strict';


const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

function active () {
    let checkbox = document.getElementsByName('check');
    for ( let i = 0; i < buttons.length; i++ ) {
        if ((keys[i]) === event.key) {
            buttons[i].classList.add('keyboard__btn--active');
            let note = buttons[i].getAttribute('data-note');
            let sound = document.getElementById('slideThree');

            if(sound.checked) {
                playSound(note);
            }
        }
    }
}

function deactivate () {
    for ( let i = 0; i < buttons.length; i++ ) {
        buttons[i].classList.remove('keyboard__btn--active');
    }
}


    window.addEventListener('keydown', active);
    window.addEventListener('keyup', deactivate);
})();
