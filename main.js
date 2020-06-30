'use strict';

const number = 100;
let input = document.querySelector('.js-inputNumber');
const button = document.querySelector('.js-btn');
const textClue = document.querySelector('.js-clue');
const attemps = document.querySelector('.js-attemps');
console.log();

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber(number));

// // function getANumber(event) {
// //     if (input > number) {
// //       return console.log(`Demasiado Alto`);

// //     if (input< number) {
// //       return console.log('Demasiado bajo');

// //     if (input===number) {
// //         return console.log('Has ganado campeona!');

// //     if (input >100 || input<=0) {
// //         return console.log('El número debe estar entre 1 y 100');
// //         }
// //     }
// //   }

// button.addEventListener('click', getANumber);

//contador de intentos
