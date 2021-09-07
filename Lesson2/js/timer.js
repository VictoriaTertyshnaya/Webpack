const { Howl } = require('howler');

let second;
let period = 10000000;
let x;
let one_click = 0;

const timerForm = document.getElementById('calcTime');



export function greatTimer() {

    document.calcTime.start.onclick = () => start();
    document.calcTime.pause.onclick = () => pause();

    timerForm.onsubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        period = formData.get('setTimer');
        second = period;
        document.getElementById('second').innerText = period;
    }


    function start() {
        x = setInterval(() => { timer(); }, 1000);
        one_click = 0;
    }

    function pause() {
        clearInterval(x);
        one_click++;
        if (one_click > 1) {
            one_click = 0;
            second = period;
            document.getElementById('second').innerText = second;
        }
    }

    const sound = new Howl({
        src: ['sound.mp3']
    });

    function timer() {
        if (second >= 0) {
            document.getElementById('second').innerText = second;
            second--;
        } else {
            pause();
            sound.play();
        }
    }



}