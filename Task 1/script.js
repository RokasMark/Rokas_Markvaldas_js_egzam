/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

'use strict';
console.log('script.js');

const formEl = document.forms[0];
const btnEl = document.getElementById('submit-btn')
const outputEl = document.getElementById('output')
const inputEl = document.getElementById('search')


formEl.addEventListener('submit', (event) => {
    event.preventDefault();

        const lb = inputEl.value * 2.2046;
        const g = inputEl.value / 0.001;
        const oz = inputEl.value * 35.274;
        outputEl.innerHTML = `<p class='output-block'> weight in kilograms  ${inputEl.value} <br> converted to pounds ${(lb).toFixed(2)} <br> converted  to grams ${g} <br> converted  to ozt ${(oz).toFixed(2)}</p>`
        inputEl.value = '';
    });
    
