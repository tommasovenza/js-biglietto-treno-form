// le variabili
var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');


// evento quando si clicca su genera
buttonGenera.addEventListener('click', 
    function() { 

// gestione elaborazione biglietto
var formNome = document.getElementById('form-nome').value;
var formKm = document.getElementById('form-km').value;
var formEta = document.getElementById('form-eta').value;
    }

);


//funzione Annulla 
buttonAnnulla.addEventListener('click', 
    function() {
// annulla tutte le variabili sottostanti attribuendo ad ognuna valore vuoto
var formNome = document.getElementById('form-nome').value = '';
var formKm = document.getElementById('form-km').value = '';
// questa ha come valore il primo valore che si trova nella select
var formEta = document.getElementById('form-eta').value = 'Minorenne';

}  

);


