/** 
UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine
*/
//UUACGCAGUAGA convertiser en acide aminé
var arn = "UUACGCAGUAGA";
var arn1 = "CCGUCGUUGCGCUACAGC";
var arn2 = "CCUCGCCGGUACUUCUCG";

 
function editARN(arn) {
    acid = ""
    for (let  i= 0; i < arn.length; i++) {
       acid += arn[i];      
        if ( i !== 0 && i !== arn.length - 1  ) {
            if ((i + 1) % 3 == 0 ){
                acid += "-";
            }          
        }
    }
    return acid
}
editARN(arn2)
 var codon = acid.split("-");

function trans(codon) {
    if (codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG" || codon == "AGU" || codon == "AGC"){
       return "Sérine"; }
    else if (codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG" ){
        return "Proline";}
    else if (codon == "UUA" || codon == "UUG"){
        return "Leucine"}
    else if (codon == "UUU" || codon == "UUC"){
        return "Phénylalanine" }
    else if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG" ){
        return "Arginine"}
    else if (codon == "UAU" || codon == "UAC"){
        return "Tyrosine"}
    else {
        return 0
    }
    
}
tab = []
for (let i = 0; i < codon.length; i++) {
    tab.push(trans(codon[i]));   
}

console.log( "la chaine d'arn :'"+ arn2 + "' est composé par les acides aminées suivantes: " + tab.join("-"))

