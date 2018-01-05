(function() {
    'use ctrict';

    const blockTimer = document.querySelector('.timer');
    blockTimer.innerHTML = '0 min: 0 sec';
    const blockLetter = document.querySelector('.string');
    const btnStart = document.querySelector('.start');
    const score = document.querySelector('.score');
    const bestScore = document.querySelector('.bestScore');
    let error = 0;
    let minuts;
    let seconds;

    let active = true;
    let timer = null;
    let string = 'qwerty';
    const charsArr = string.split("").reverse();

    if(typeof localStorage["localSec"] !== "undefined" && typeof localStorage["localMin"] !== "undefined") {
        bestScore.innerHTML = localStorage.getItem("localMin") + " min" + " : " + localStorage.getItem("localSec") + " sec";
    } else {
        bestScore.innerHTML = "0 min : 0 sec";
    }


    let start = () => {
        window.addEventListener('keydown', lol);

        let date = new Date;

        if (active) {
            timer = setInterval(function() {
                let newDate = new Date - date;
                    seconds = Math.floor((newDate / 1000) % 60);
                    minuts = Math.floor((newDate /1000 / 60) % 60);

                    blockTimer.innerHTML = minuts + " min" + " : " + seconds + " sec";
            }, 100)
        }
        active = false;
    }


    let render = () => {
        blockLetter.innerHTML = charsArr[0];
    }


    let local = (item, localItem) => {
        if (typeof localStorage[localItem] !== "undefined") {
            let localItemValue = localStorage.getItem(localItem);
            if(item < +localItemValue){
                localStorage.setItem(localItem, item);
            }
        } else {
            localStorage.setItem(localItem, item);
        }
    }


    let lol = (event) => {
        let letterKey = event.key;
        if(charsArr[0] === letterKey && (charsArr.length - 1) !== 0){
            charsArr.shift();
            render();
        } else if (charsArr.length === 1){
            clearInterval(timer);
            local(seconds, "localSec");
            local(minuts, "localMin");
            alert(`${error} ошибок`);
        } else {
            error += 1;
            console.log(error);
        }
    }


    btnStart.addEventListener('click', start);
    btnStart.addEventListener('click', render);

})()
