(() => {
  const e = document.querySelector('.inputs');
  const t = document.querySelector('.form');
  const r = document.querySelector('.answer-text');
  window.addEventListener('DOMContentLoaded', () => {
    e.querySelectorAll('.input').forEach((e) => (e.value = ''));
  }),
    t.addEventListener('submit', (t) => {
      t.preventDefault(),
        (function (e) {
          let t = '';
          (t =
            e.length == 1
              ? `There is one root: ${e[0]}.`
              : e.length == 2
              ? `There are two roots: ${e[0]} and ${e[1]}.`
              : 'There are no real roots.'),
            (r.innerHTML = t);
        })(
          (function (e, t, r) {
            const o = [];
            const n = t ** 2 - 4 * e * r;
            return (
              n >= 0 && o.push(((-t + Math.sqrt(n)) / (2 * e)).toFixed(1)),
              n > 0 && o.push(((-t - Math.sqrt(n)) / (2 * e)).toFixed(1)),
              o
            );
          })(
            e.querySelector('#coef-a').value,
            e.querySelector('#coef-b').value,
            e.querySelector('#coef-c').value
          )
        );
    }),
    e.addEventListener('input', ({ target: e }) => {
      let t;
      e.id == 'coef-a'
        ? ((t = e.value),
          (document.querySelector('[data-id="coef-a"]').innerHTML =
            t == '' || isNaN(t) ? 'a' : t))
        : (function (e, t, r) {
            const o = document.querySelector(`[data-id="${t}"]`);
            const n = document.querySelector(`[data-operator="${t}"]`);
            (o.innerHTML = e == '' || isNaN(e) ? r : Math.abs(e)),
              (n.innerHTML = e < 0 ? '-' : '+');
          })(e.value, e.id, e.dataset.coef);
    });
})();
