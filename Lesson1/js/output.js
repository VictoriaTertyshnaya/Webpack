const paragraph = document.getElementById("output")

export function printError(errorText) {
    paragraph.innerHTML = errorText;
    paragraph.style.color = "red";
}

export function printResult(diff) {
    paragraph.innerHTML = `
        Years: ${-diff.years}, 
        months: ${-diff.months}, 
        days: ${-diff.days}
        `;
    paragraph.style.color = "black";


}