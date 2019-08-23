const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
//Est-ce que tous les livres ont été au moins empruntés une fois ?
var value =[]
function rented() {
    for (let i = 0; i < books.length; i++) {
        if (books[i].rented >= 1) {
            value.push(true);
        }
        else {
            value.push(false);
        }
    }
    cont = 0
    for (let i = 0; i < value.length; i++) {
        if (value[i] === true) {
            cont += 1;
        }
    }
    if (cont === books.length) {
        console.log("tous les livres ont été empruntés plus d'une fois");
    } else {
        console.log("il y a au moins un livre qui n'a pas été emprunté");
    }
}
rented()
//Quel est livre le plus emprunté ?
let max = 0;
let maxRented;
function maxrented() {
    for (let i = 0; i < books.length; i++) {
        if (max <= books[i].rented) {
            max = books[i].rented;
            maxRented = books[i];
        }
    }
    console.log(maxRented.title);
    
}
maxrented()
//Quel est le livre le moins emprunté ?
var min = 0;
var minRented;
function minrentend(){
    for (let i = 0; i < books.length; i++) {
        if (min <= books[i].rented) {
            min = books[i].rented;

        }
    }
    for (let i = 0; i < books.length; i++) {
        if (min >= books[i].rented) {
            min = books[i].rented;
            minRented = books[i];
        }
    } 
    console.log("le livre le moins emprunté est " + minRented.title);
}
minrentend()

//Trouve le livre avec l'ID: 873495
function findId() {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === 873495) {
            livre = books[i].title;
            console.log("le livre avec l'ID: 873495 est  " + livre);
        }
    }
    
}
findId()

//Supprime le livre avec l'ID: 133712 ;
/** 
for (let i = 0; i < books.length; i++) {
    if (books[i].id == 133712)
        delete books[i];
}
console.log(books)
**/

function suppr() {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == 133712) {
            books.splice(i, 1);
            console.log("le livre" + books[i].title + "a été supprimé");
        }
    }
}

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
tab = [];
function orderlist() {
    for (let i = 0; i < books.length; i++) {
        tab.push(books[i].title);
    }
    console.log(tab.sort());
}
orderlist()