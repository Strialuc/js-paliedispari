/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


//scelta utente

const numUser = parseInt(prompt("Scegli un numero da 1 a 5"));

console.log("Il numero dell'utente è " + numUser);

const bet = prompt("scegli pari o dispari")

console.log("la scelta dell'utente è " + bet);

// funzione per numero casuale pc

function numCasuale() {

    return Math.floor(Math.random() * 5) + 1;
}

// numero pc

const numPc = numCasuale();

console.log("Il numero del pc è " + numPc);

// somma numeri 

const sommaNumeri = numUser + numPc;

console.log(sommaNumeri);

// funzione per stabilire chi vince 


function pariODispari(num) {
    return num % 2 === 0 ? "pari" : "dispari";
}

const risultato = pariODispari(sommaNumeri);



if (risultato === bet) {
    console.log( alert("Hai vinto!"));
} else {
    console.log(alert("Hai perso!"));
}