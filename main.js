const inputsContainer = document.querySelector('.inputs');
const form = document.querySelector('.form');
const answerField = document.querySelector('.answer-text');

function showAInFormula(value) {
    const a = document.querySelector('[data-id="coef-a"]');
    a.innerHTML = value != '' && !isNaN(value) ? value : 'a';
}

function showOtherThanAInFormula(value, id, coefficient) {
    const currentCoef = document.querySelector(`[data-id="${id}"]`);
    const operator = document.querySelector(`[data-operator="${id}"]`);

    currentCoef.innerHTML =
        value != '' && !isNaN(value) ? Math.abs(value) : coefficient;
    operator.innerHTML = value < 0 ? '-' : '+';
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
    if (target.id == 'coef-a') {
        showAInFormula(target.value);
    } else {
        showOtherThanAInFormula(target.value, target.id, target.dataset.coef);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = inputsContainer.querySelector('#coef-a').value;
    const b = inputsContainer.querySelector('#coef-b').value;
    const c = inputsContainer.querySelector('#coef-c').value;
    showAnswer(solveEquation(a, b, c));
});
