const inputsContainer = document.querySelector('.inputs');
const form = document.querySelector('.form');
const answerField = document.querySelector('.answer-text');

function showCoefficientInFormula(input) {
    const currentCoef = document.querySelector(`[data-id="${input.id}"]`);
    const value =
        input.value != '' && !isNaN(input.value)
            ? input.value
            : input.dataset.coef;

    if (currentCoef.dataset.id != 'coef-a') {
        document.querySelector(`[data-operator="${input.id}"]`).innerHTML =
            input.value < 0 ? '-' : '+';
        currentCoef.innerHTML = !isNaN(value)
            ? Math.abs(value)
            : input.dataset.coef;
    } else {
        currentCoef.innerHTML = value;
    }
}

function solveEquation(a, b, c) {
    let answer = [];
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant >= 0) {
        answer.push(((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(1));
    }
    if (discriminant > 0) {
        answer.push(((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(1));
    }

    return answer;
}

function showAnswer(answer) {
    let text = '';

    if (answer.length == 1) {
        text = `There is one root: ${answer[0]}.`;
    } else if (answer.length == 2) {
        text = `There are two roots: ${answer[0]} and ${answer[1]}.`;
    } else {
        text = 'There are no real roots.';
    }

    answerField.innerHTML = text;
}

function clearInputs() {
    inputsContainer
        .querySelectorAll('.input')
        .forEach((input) => (input.value = ''));
}

window.addEventListener('DOMContentLoaded', clearInputs);

inputsContainer.addEventListener('input', ({ target }) => {
    showCoefficientInFormula(target);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = inputsContainer.querySelector('#coef-a').value;
    const b = inputsContainer.querySelector('#coef-b').value;
    const c = inputsContainer.querySelector('#coef-c').value;
    showAnswer(solveEquation(a, b, c));
});
