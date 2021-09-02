let isCalc = true;
let isTime = false;

const calcLink = document.getElementById('calcLink');
const calcDiv = document.getElementById('calcDiv');
const timeLink = document.getElementById('timeLink');
const timeDiv = document.getElementById('timeDiv');
timeDiv.style.display = 'none';

export function addSwitcher() {
    calcLink.addEventListener('click', (event) => {
        if (isTime) {
            calcDiv.style.display = 'block';
            timeDiv.style.display = 'none';
            isCalc = true;
            isTime = false;
        };
    })
    
    
    timeLink.addEventListener('click', (event) => {
        if (isCalc) {
            timeDiv.style.display = 'block';
            calcDiv.style.display = 'none';
            isCalc = false;
            isTime = true;
        };
    })
}