import { printError, printResult } from "./output.js"
import calcDatesDiff from "./calcDatesDiff.js"
import { addSwitcher } from './switcher.js';
import { greatTimer } from './timer.js';


const form = document.getElementById('calcDate');

addSwitcher();
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
}