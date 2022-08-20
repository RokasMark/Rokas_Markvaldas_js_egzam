/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js');

const ENDPOINT = 'cars.json';
const outputEl = document.getElementById('output');

async function getBrandsData() {
    const resp = await fetch(ENDPOINT);
    const brandData = await resp.json();
    return brandData;
}

async function showBrands() {
   let cars = await getBrandsData();
    cars.forEach(element => {
        const CardDiv = document.createElement('div');
        CardDiv.className = 'card-block'
        outputEl.className = 'reponsive-output'
        CardDiv.innerHTML = `<ul> ${element.brand} </ul>  <li> ${element.models} </li> ` ;
        outputEl.append(CardDiv)
    }); 
}

showBrands()