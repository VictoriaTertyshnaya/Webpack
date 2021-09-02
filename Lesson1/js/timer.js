let second = 10000000;
let x;

const timerForm = document.getElementById('calcForm');



export function greatTimer() {

    document.calcForm.start.onclick = () => start();
    document.calcForm.pause.onclick = () => pause();

    timerForm.onsubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    second = formData.get('yourTime');
    } 

    function start() {
    pause();
    x = setInterval(() => { timer(); }, 1000);
    }

    start();

    function pause() {
    clearInterval(x);
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