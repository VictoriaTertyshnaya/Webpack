let isCalc = true;
let isTime = false;

const calcLink = document.getElementById('calcLink');
const calc_container = document.getElementById('calc_container');
const timeLink = document.getElementById('timeLink');
const timer_container = document.getElementById('timer_container');
timer_container.style.display = 'none';

export function addSwitcher() {
    calcLink.addEventListener('click', (event) => {
        if (isTime) {
            calc_container.style.display = 'block';
            timer_container.style.display = 'none';
            isCalc = true;
            isTime = false;
        };
    })


    timeLink.addEventListener('click', (event) => {
        if (isCalc) {
            timer_container.style.display = 'block';
            calc_container.style.display = 'none';
            isCalc = false;
            isTime = true;
        };
    })
}