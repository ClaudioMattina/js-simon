/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


/* prende di riferimento un elemento nell'html */ /* ****************************************************** */
/* creare una funzione che stampi numeri casuali */ /* ************************************ */
/* creare un ciclo for che ne stampi 5 di numeri casuali */ /* ************************************************ */
/* i numeri generati dovranno sparire dopo 30 secondi */ /* **************************** */
/* creare 5 promt dove l'utente inserisce i numeri */ /* ****************** */
/* creare un array che paragoni i numeri dell'utente con quelli generati randomicamente */
/* stampare il risultato di quanti numeri sono stati azzeccati dall'utente */




/* funzione che crea numeri randomici univoci rispetto due valori (uno minimo ed uno massimo) */
function randomNumGenerator (minValue, maxValue){
    /* nel caso il valore non sia giusto stampo un error */
    if( isNaN(parseInt(minValue)) || isNaN(parseInt(maxValue)) ){
        console.error("weeee il valore non è un numero")
    }

    /* operazione per generare un numero random tra due valori indicati */
    return (Math.floor(Math.random() * ((maxValue + 1) - minValue) + minValue))
}


function pulisci (elementId){
    elementId.innerHTML = "";
}








/* prendo l'elemento html dove ci saranno scritti i numeri randomici generati */
let titoloNumeri = document.getElementById("numeri");
/* creo un array con dentro i numeri randomici */
let numeriRandomici = [];
/* creo una variabile punteggio che dovrà aumentare */
let punteggio = 0;

/* creo un ciclo for che genera 5 numeri randomici */
for(i = 0; i < 5; i++){
    numeriRandomici.push(randomNumGenerator(1,100));
}

/* stampo nell'html i 5 numeri randomici */
titoloNumeri.innerHTML= numeriRandomici;



/* dopo 3 secondi i numeri randomici generati e stampati si cancellano */
setTimeout(pulisci,3000,titoloNumeri)

/* dopo 3 secondi si generano 5 promt dove l'utente inserisce il numero */
setTimeout(function(){
    for( k = 0; k < 5; k++){

        let numeriUtente = parseInt(prompt("inserisci sti numerii"))
        if(numeriRandomici.includes(numeriUtente)){
            punteggio ++
        }
    }
    
}, 3000);

console.log(numeriRandomici)

document.getElementById("point").innerHTML=punteggio;

