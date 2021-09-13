import { printError, printResult } from "./output.js"
import calcDatesDiff from "./calcDatesDiff.js"
import { openbox } from './switcher.js';
import { openbox2 } from './switcher.js';
import { greatTimer } from './timer.js';



openbox();
openbox2();

const form = document.getElementById('calcDate');

greatTimer();


form.onsubmit = function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const dateFrom = formData.get("dateFrom");
    const dateTo = formData.get("dateTo");

    if (!dateFrom || !dateTo) {
        printError(`Ошибка!`);
        return
    }

    const datesDiff = calcDatesDiff(dateFrom, dateTo);

    printResult(datesDiff);
};