// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

//     Wayne Barnett Founder & CEO        wayne-barnett-founder-ceo.jpg
//    Angela Caroll  Chief Editor         angela-caroll-chief-editor.jpg
//    Walter Gordon  Office Manager       walter-gordon-office-manager.jpg
//    Angela Lopez   Social MediaManager  angela-lopez-social-media-manager.jpg
//    Scott Estrada  Developer            scott-estrada-developer.jpg
//    Barbara Ramos  Graphic Designer     barbara-ramos-graphic-designer.jpg



// MILESTONE 0:
const team = [
    {
        nominativo : "Wayne Barnett",
        ruolo: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nominativo : "Angela Caroll",
        ruolo: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        nominativo : "Walter Gordon",
        ruolo: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        nominativo : "Angela Lopez",
        ruolo: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        nominativo : "Scott Estrada",
        ruolo: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        nominativo : "Barbara Ramos ",
        ruolo: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
]

// MILESTONE 1:
for(let i=0; i<team.length; i++){
    console.log(team[i]);
}


// MILESTONE 2/ bonus1:

let teamDiv = document.getElementById("team-info");

for (let i=0; i<team.length; i++){
    teamDiv.innerHTML +=
    `<div class=" text-center p-3">
        <img src="../img/${team[i].image}" class="img-fluid w-75 h-75" alt="">
        <h2>${team[i].nominativo}</h2>
        <p>${team[i].ruolo}</p>
    </div>`
}




