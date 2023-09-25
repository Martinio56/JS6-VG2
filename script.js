//Oppgave 1-------------------------------------------------------------------------------------------------------------------------

// var Tekst = ""
// var Lengde = Tekst.length;

// if (Lengde == 0) {
//     console.log("Teksten er tom");
// } else {
//     console.log("Teksten er ikke tom");
// }

//Oppgave 2-------------------------------------------------------------------------------------------------------------------------

// var Tekst = "   Røyken Videregående Skole"

// Split = () => Tekst.trim().split(" ");

// console.log(Split());

//Oppgave 3-------------------------------------------------------------------------------------------------------------------------

// var Tekst = prompt("Sjekk om det er et palindrom");

// var Palindrom = Tekst.split("").reverse().join("");

// if (Tekst == Palindrom) {
//     console.log(`${Tekst} er et palindrom`);
// } else {
//     console.log(`${Tekst} er ikke et palindrom`);
// }

//Oppgave 4-------------------------------------------------------------------------------------------------------------------------

// var Tekst = prompt("Skriv et ord");

// var Sorter = Tekst.split("").sort().join("");

// console.log(Sorter);

//Oppgave 5-------------------------------------------------------------------------------------------------------------------------

// Antall = (Tekst, Bokstav) => {
//     let Telling = 0;
//     for (let i = 0; i < Tekst.length; i++) {
//         if (Tekst[i] === Bokstav) {
//             Telling++;
//         }
//     }
//     return Telling;
// }

// var Tekst = "Welcome to Norge"
// var Bokstav = "o"
// var Telling = Antall(Tekst, Bokstav);
// console.log(Telling)

//Oppgave 6-------------------------------------------------------------------------------------------------------------------------

// Kutting = (Tekst, Antall) => {
//     for (let i = 0; i < Tekst.length; i += Antall) {
//         console.log(Tekst.slice(i, i + Antall));
//     }
// }

// var Tekst = "ABCAABCAAADA"
// var Antall = 3
// Kutting(Tekst, Antall);

//Oppgave 7-------------------------------------------------------------------------------------------------------------------------

// Kutting = (Tekst, Antall) => {
//     for (let i = 0; i < Tekst.length; i += Antall) {
//         var Segment = Tekst.slice(i, i + Antall);
//         var NyttSegment = "";
//         for (let j = 0; j < Segment.length; j++) {
//             if (Segment[j] !== Segment[j + 1]) {
//                 if (!NyttSegment.includes(Segment[j])) {
//                     NyttSegment += Segment[j];
//                 }
//             }
//         }
//         console.log(NyttSegment);
//     }
// }

// var Tekst = "ABCAABCAAADA"
// var Antall = 3
// Kutting(Tekst, Antall);

//Oppgave 8-------------------------------------------------------------------------------------------------------------------------

Engang = (a, b) => {
    var aNy = a.split("");
    var bNy = b.split("");

    aNy.forEach(element => {

    });
}

a = 'xdab'
b = 'xzca'
Engang(a, b);

//----------------------------------------------------------------------------------------------------------------------------------