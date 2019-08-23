
/**Les règles de conversations du bot sont les suivantes
 * (rangées par priorité - si deux règles sont vraies, seule la plus haute dans la liste s'applique) :

Si on lui pose une question(= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus(= la phrase est 100 % en majuscules), le bot répond "Pwa, calme-toi...";
==>console.log("Pwa, calme-toi...")
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?";
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek."

*/
var  value = prompt("salut je suis le robot ")
tab = []

var upcase = value.toUpperCase()

if(value.length !==0){
    if (value[value.length - 1] === "?"){
        console.log("Ouais Ouais...")
    }
    
    if (value[value.length - 1] !== "?" && value === upcase){
        console.log("Pwa, calme-toi...")
    }

    if (value[value.length - 1] !== "?" && (value.indexOf("Fortnite") !== -1 || value.indexOf("fortnite") !== -1)){
    console.log("on s' fait une partie soum-soum ?");
    }
    if (value[value.length - 1] !== "?" && value.indexOf("Fortnite") == -1 && value !== upcase && value.indexOf("fortnite") == -1 ) {
        console.log("balek.")
    }
}
if (value.length === 0) {
    console.log("t'es en PLS ?")
}



