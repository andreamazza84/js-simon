// Esercizio di oggi, Simon Says repo/cartella:
//  js-simon
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.


/** Genera una array di lunghezza variabile con numeri casuali al suo interno
 * @param min numero casuale più piccolo generabile
 * @param max numero casuale più grande generabile
 * @param length numero di valori numerici all'interno dell'array.
 */
function random5(min, max, length){
  var rndNum = [];
  for (var i = 0; i < length; i++) {
    rndNum[i] = Math.floor(Math.random()*(max - min)) + min;
  }
  return rndNum;
}


//****************************************************************************//

//Un prompt spiega all'utente le regole del gioco.
//Una volta che viene inserita una qualsiasi chiave, il gioco inizia.

var start = confirm("Verranno mostrati 5 numeri casuali per 30 secondi. Inseriscili nell'ordine nella casella che apparirà in seguito. Premi [OK] per cominciare");

var difficulty = 5;
var min = 1;
var max = 100;
var show = document.getElementsByTagName('p');
console.log(show);
if(start){
  var list = random5(min, max, difficulty);
  for (var i = 0; i < list.length; i++) {
     //console.log(list[i]);
  }
}


//Parte sincrona
//setTimeout(showNumbers, 30000);
