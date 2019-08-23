 var number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
  // calcul de nombre d'étage

var space = "";
var space1 = " ";
var tag = "#";
floor1 = ""
console.log(`Voici votre pyramide de ${number} étages`)
function pyramid() {
  for (let index = 1; index <= number; index++) {
    space = "";
    for (let i = 1; i <= number - index; i++) {
      space += " "
    }
    floor = space + tag;
    console.log(floor);
    tag += "#";
  }
}
