/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showUsersBtn = document.getElementById('btn');
const outputEl  =  document.getElementById('output');
const messageEl = document.getElementById('message');


showUsersBtn.addEventListener('click', showUserData);

async function getUsersData() {
    const resp = await fetch(ENDPOINT);
    const userData = await resp.json();
    return userData;
}

async function showUserData() {
    const getUser = await getUsersData();
    makeHtml (getUser);
}

 function makeHtml(oneCard) {
    messageEl.style.display = 'none';
    oneCard.forEach(element => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card'
        userCard.innerHTML = `<img  src='${element.avatar_url}'> <p>${element.login}</p>`;
        outputEl.append(userCard);
        
    });
 }

