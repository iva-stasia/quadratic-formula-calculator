(()=>{"use strict";const e=document.querySelector(".inputs"),t=document.querySelector(".form"),r=document.querySelector(".answer-text");window.addEventListener("DOMContentLoaded",(function(){e.querySelectorAll(".input").forEach((e=>e.value=""))})),t.addEventListener("submit",(t=>{t.preventDefault(),function(e){let t="";t=1==e.length?`There is one root: ${e[0]}.`:2==e.length?`There are two roots: ${e[0]} and ${e[1]}.`:"There are no real roots.",r.innerHTML=t}(function(e,t,r){let o=[];const n=Math.pow(t,2)-4*e*r;return n>=0&&o.push(((-t+Math.sqrt(n))/(2*e)).toFixed(1)),n>0&&o.push(((-t-Math.sqrt(n))/(2*e)).toFixed(1)),o}(e.querySelector("#coef-a").value,e.querySelector("#coef-b").value,e.querySelector("#coef-c").value))})),e.addEventListener("input",(({target:e})=>{var t;"coef-a"==e.id?(t=e.value,document.querySelector('[data-id="coef-a"]').innerHTML=""==t||isNaN(t)?"a":t):function(e,t,r){const o=document.querySelector(`[data-id="${t}"]`),n=document.querySelector(`[data-operator="${t}"]`);o.innerHTML=""==e||isNaN(e)?r:Math.abs(e),n.innerHTML=e<0?"-":"+"}(e.value,e.id,e.dataset.coef)}))})();