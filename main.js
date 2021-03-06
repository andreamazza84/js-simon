// Esercizio di oggi, Simon Says repo/cartella:
//  js-simon
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.
//****************************************************************************//

// Functions

/** Genera una array di lunghezza variabile con numeri casuali al suo interno
 * @param min numero casuale più piccolo generabile
 * @param max numero casuale più grande generabile
 * @param length numero di valori numerici all'interno dell'array.
 */
function random5(min, max, length){
  var randomList = [];
  for (var i = 0; i < length; i++) {
    randomList[i] = Math.floor(Math.random()*(max - min)) + min;
  }
  return randomList;
}
/** Mostra all'interno del DOM i 5 numeri casuali generati.
 *
 */
function showNumbers(){
  var randomList = random5(min, max, difficulty);
  //Una volta cominciato il gioco, inserisce i numeri in ciascuna casella.
  for (var i = 0; i < randomList.length; i++) {
    show[i].innerHTML = randomList[i];
  }
  return randomList;
}
/** Nasconde i 5 numeri casuali mostrati nel DOM
 *
 */
function hideNumbers(){
   for (var i = 0; i < show.length; i++) {
     show[i].innerHTML = "X";
   }
}
/** Confronta i numeri della lista generata casualmente con quelli inserito dall'utente.
 *
 */
function insertNum(){
  var win = true;
  for (var i = 0; i < numbers.length; i++) {
    userList[i] = Number(prompt("Inserisci il "+ (i+1) +"° numero"));
    if (userList[i] === numbers[i]) {
      win *= true;
    }
    else{
      win = false;
    }
  }
  return win;
}

//****************************************************************************//

//Parte Sincrona
//Un prompt spiega all'utente le regole del gioco.
//Una volta che viene inserita una qualsiasi chiave, il gioco inizia.

var difficulty = 5;
var min = 1;
var max = 100;
var show = document.getElementsByTagName('p');
var time = 6000;
var userList = [];
var start = confirm("Verranno mostrati 5 numeri casuali per " + (time/1000) + " secondi. Inseriscili nell'ordine nelle caselle che appariranno in seguito. Premi [OK] per cominciare");


  //Quando viene data conferma al messaggio mostrato, il gioco comincia.
  if(start){
    var numbers = showNumbers();
    console.log(numbers);
  }

  //Parte asincrona

  setTimeout(function(){
    //Trascorsi "time/1000" secondi i numeri vengono nuovamente nascosti.
    hideNumbers();

    //I numeri inseriti dall'utente vengono confrontati con quelli inizialmente mostrati.
    var win = insertNum();
    console.log(win);
    //win = true/false restituita da insertNum().
    if (win) {
      alert("Hai vinto!");
    }
    else{
      alert("Hai perso...");
    }
  },time);
