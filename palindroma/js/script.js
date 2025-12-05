/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


/// PALINDROMA

// Chiedere all’utente di inserire una parola
let Word = prompt("Inserisci una parola!").toLowerCase();


if (reversedWord(Word) === Word) {
    alert("La parola che hai scelto è palindroma!") ;
} else {
    alert("La parola che hai scelto NON è palindroma!");
}


// FUNZIONI

// Funzione per capire se la parola inserita è palindroma

function reversedWord(parola) {
    let risultato = "";
    for (let i = parola.length - 1; i >=0; i--) {
        risultato += parola[i];
    }

    return risultato;
}


