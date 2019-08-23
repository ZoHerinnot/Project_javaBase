// Un prompt s'affiche avec la question suivante
var number = prompt("De quel nombre tu calculer la factorielle ?")
number = Number(number);

// Calcule de la factoriel
function factoriel() {
    for (let num = number - 1; num > 0; num--) {
        if (num == 0) {
            break;
        };
        number = number * num
    }
    console.log(`Le resultat est ${number}`);
}
