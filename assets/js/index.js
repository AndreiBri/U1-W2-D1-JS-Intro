/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
// string --> "farina", "acqua", "Stefano", (frase di senso compiuto), " " ( viene riconosciuto come "spazio" e non uno spazio effettivamente vuoto), "10" (caratteri numerici ma riconosciuti come lettere)
// number --> 10, 100, 0, -5, 20.12, NaN
// boolean --> true, false risposte di tipo logico (si/no, acceso/spento, vero/falso)
// undefined --> rappresenta l'assenza di un valore generica ma funzione presente nel codice. ( forse sotto console.log() )
// null --> rappresenta l'assenza di valore intenzionale
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

// myName = "Andrei";
// console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* console.log(12 + 20) */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x ;
   x = 12 ;  */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* const myName = "Andrei";
myName = "Briceag";
console.log(myName);
index.js:48 Uncaught TypeError: Assignment to constant variable.
    at index.js:48:8 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

// let x = 12;
// console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

// name1 = "john";
// name2 = "John";

// console.log("name1=name2", name1 === name2);
// console.log("name1lowercase=name2lowercase", name1.toLowerCase() === name2.toLowerCase());
