// le variabili
var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');

// variabili del form
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');
var formNome = document.getElementById('form-nome');


//Elementi biglietto 
var biglNome = document.getElementById('bigl-nome');
var biglOfferta = document.getElementById('bigl-offerta');
var biglCosto = document.getElementById('bigl-costo');

// Evento quando si clicca su genera
buttonGenera.addEventListener('click', 
    function() { 

// Gestione elaborazione biglietto (cosa succede quando clicco su genera dopo aver inserito i dati)
var formNome = document.getElementById('form-nome').value;
var formKm = document.getElementById('form-km').value;
var formEta = document.getElementById('form-eta').value;

// calcolo prezzo

var prezzo = (formKm * 0.21);

// sconti

if ( formEta == 'Minorenne' ) {
    prezzo = (prezzo - (prezzo * 20) / 100);
} else if ( formEta == 'Anziano') {
    prezzo = (prezzo - (prezzo * 40) / 100);
}

// Compilazione elementi biglietto
biglNome.innerHTML = formNome;
biglCosto.innerHTML = prezzo.toFixed(2) + " euro";
 
    }
);

//Funzione Annulla (ovvero cosa succede quando clicco sul tasto annulla)
buttonAnnulla.addEventListener('click', 
    function() {

// annulla tutte le variabili sottostanti attribuendo ad ognuna valore vuoto

var formNome = document.getElementById('form-nome').value = '';
var formKm = document.getElementById('form-km').value = '';

// questa ha come valore il primo valore che si trova nella select
var formEta = document.getElementById('form-eta').value = 'Minorenne';

//gestione annullamento nome
biglNome.innerHTML = '';

    }  
);


