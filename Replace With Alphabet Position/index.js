/*

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

// function alphabetPosition(text) {
// const alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let textArray = text.split("");

// let textString = "";

// for (let i = 0; i < textArray.length; i++) {

//   let position = alphabet.indexOf(textArray[i].toLowerCase()) + 1;

//   if (position) {
//     if (i !== textArray.length - 2) {
//       textString += position+" ";
//     } else {
//       textString += position;
//     }
//   }
// }

// return textString
// }

function alphabetPosition(text) {
  return text
    .split("")
    .filter((c) => /[a-zA-Z]/.test(c))
    .map((c) => c.toLowerCase().charCodeAt(0) - 96)
    .join(" ");
}

/*

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

*/

/*
Example :

alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/



