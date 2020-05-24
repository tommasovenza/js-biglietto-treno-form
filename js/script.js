// definisco le variabili

var mostraBiglietto = document.getElementById('biglietto');

// variabili dei due pulsanti principali 
var genera = document.getElementById('btn-genera');
var annulla = document.getElementById('btn-annulla');

// le variabili attribuite ai form utente
var inputNome = document.getElementById('form-nome');
var inputKm = document.getElementById('form-km');
var inputEta = document.getElementById('form-eta');

// Variabili gestione stampa biglietto

var nomeBiglietto = document.getElementById('bigl-nome');
var offertaBiglietto = document.getElementById('bigl-offerta');
var prezzo = document.getElementById('bigl-costo');
var numeroCarrozza = document.getElementById('bigl-carrozza');
var numeroCodiceCP = document.getElementById('bigl-codiceCP');

// evento click pulsante genera
genera.addEventListener('click', 
function() {

// variabili costo biglietto

var km = parseInt(inputKm.value);

var costoBiglietto = km * 0.21;

var offerta = 'prezzo standard';

if  (inputEta.value == 'minorenne') {
    costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100); 
    offerta = 'prezzo speciale sconto minorenni';
    }
    
    else if ( inputEta.value == 'anziano') {
        costoBiglietto = costoBiglietto - (costoBiglietto * 40 / 100);
    offerta = 'prezzo speciale sconto anziani';
    }
    
// calcolo numero carrozza e codice CP    
numeroCarrozzaValue = Math.floor(Math.random() * 10) + 1;
numeroCodiceCPValue = Math.floor(Math.random() * 100000);

// cosa succede quando si clicca genera

// stampo valori nel biglietto
// questa è la parte più difficile da associare 

nomeBiglietto.innerHTML = inputNome.value;
offertaBiglietto.innerHTML = offerta;
prezzo.innerHTML = costoBiglietto.toFixed(2) + ' Euro';
numeroCarrozza.innerHTML = numeroCarrozzaValue;
numeroCodiceCP.innerHTML = numeroCodiceCPValue;


// infine mostro biglietto

mostraBiglietto.className = 'visible';

}
);

// evento click pulsante annulla // reset
annulla.addEventListener('click', 
function() {

// cosa succede quando si clicca pulsante annulla

// reset campi stampati sul biglietto
nomeBiglietto.innerHTML = '';
offertaBiglietto.innerHTML = '';
prezzo.innerHTML = '';
numeroCarrozza.innerHTML = '';
numeroCodiceCP.innerHTML = '';

// reset campi compilati dei form
inputNome.value = '';
inputKm.value = '';
inputEta.value = 'minorenne';

// nascondi biglietto
mostraBiglietto.className = 'biglietto-nascosto';

} 
); + ' euro'




