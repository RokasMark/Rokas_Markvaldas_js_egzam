/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict';
console.log('movee');

class Movie {
    constructor(titleEl, directorEl, budgetEl) {
        this.title = titleEl;
        this.director = directorEl;
        this.budget = +budgetEl;
    }
    wasExpensive() {
        if (this.budget > 100000000){
            return true;
        } else {
            return false;
        }
    }
};

const panemuniuPieva = new Movie ('panemuniuPieva', 'Tinginys Karaliunas', "50243240");

console.log('panemuniuPieva ===', panemuniuPieva);
console.log('panemuniuPieva.wasExpensive() ===', panemuniuPieva.wasExpensive());