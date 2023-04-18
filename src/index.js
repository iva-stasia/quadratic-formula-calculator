import { solveEquation } from 'quadratic-roots-function';

const inputsContainer = document.querySelector('.inputs');
const form = document.querySelector('.form');
const answerField = document.querySelector('.answer-text');

function showAInFormula(value) {
  const a = document.querySelector('[data-id="coef-a"]');
  a.innerHTML = value !== '' && !Number.isNaN(value) ? value : 'a';
}

function showOtherThanAInFormula(value, id, coefficient) {
  const currentCoef = document.querySelector(`[data-id="${id}"]`);
  const operator = document.querySelector(`[data-operator="${id}"]`);

  currentCoef.innerHTML =
    value !== '' && !Number.isNaN(value) ? Math.abs(value) : coefficient;
  operator.innerHTML = value < 0 ? '-' : '+';
}

function showAnswer(roots) {
  let text = '';

  if (roots.length === 1) {
    text = `There is one root: ${roots[0]}.`;
  } else if (roots.length === 2) {
    text = `There are two roots: ${roots[0]} and ${roots[1]}.`;
  } else {
    text = 'There are no real roots.';
  }

  answerField.innerHTML = text;
}

inputsContainer.addEventListener('input', ({ target }) => {
  if (target.id === 'coef-a') {
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
