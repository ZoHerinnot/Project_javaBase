const tab = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];



//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
function filtre(){
    for (var i = 0; i <= tab.length - 1; i++) {
        if (tab[i].year >= 1970 && tab[i].year <= 1979) {
            console.log(tab[i]);
        }
    }
    console.log("les listes des entrepreneurs qui sont nés dans les années 70: ")
}
filtre()

// une array qui contient le prénom et le nom des entrepreneurs ;
var tabName = []
function arrayname() {
    for (let i in tab) {
        tabName.push({ first: tab[i].first, last: tab[i].last });
    }
    console.log( tabName);
}
arrayname()


//Quel âge aurait chaque inventeur aujourd'hui ?
function age() {
    for (let i in tab) {
        age = 2019 - tab[i].year;
        console.log(tab[i].first + " " + tab[i].last + " est née en " + tab[i].year + " a présent il a " + age + " ans !");
    }  
}
age()

//Trie les entrepreneurs par ordre alphabétique du nom de famille.
tab2 = []
function trie() {
    for (let i = 0; i < tab.length; i++) {
        tab2.push(tab[i].last)
    }
    console.log( "Voici les entrepreneurs par ordre alphabétique: " + tab2.sort())
    
}

trie()
