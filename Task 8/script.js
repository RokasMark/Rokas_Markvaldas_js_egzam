/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

'use strict';
console.log('script.js');

function Calculator() {
    this.sum = function (a, b) {
        return a + b
    }
    this.subtraction = function (a, b) {
        return a - b
    }
    this.multiplication = function (a, b) {
        return a * b 
    }
    this.division = function (a, b) {
        return a / b
    }
};

let checkCalculator = new Calculator()

console.log('checkCalculator.sum(4, 6) ===', checkCalculator.sum(4, 6));
console.log('checkCalculator.subtraction(106, 6) ===', checkCalculator.subtraction(106, 6));
console.log('checkCalculator.multiplication(4, 250) ===', checkCalculator.multiplication(4, 250));
console.log('checkCalculator.division(22, 2)) ===', checkCalculator.division(22, 2));