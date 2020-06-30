'use strict';

let input = document.querySelector('.js-inputNumber');
const button = document.querySelector('.js-btn');
const textClue = document.querySelector('.js-clue');
const attemps = document.querySelector('.js-attemps');
console.log();

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const number = getRandomNumber(100);
console.log(number);

// const showText = textClue.innerHTML;

function getANumber(event) {
  event.preventDefault();
  let inputValue = input.value;
  if (inputValue > number) {
    return console.log(`Demasiado Alto`);

    // if (inputValue< number) {
    // return console.log('Demasiado bajo');

    // //     if (inputValue===number) {
    // //         return console.log('Has ganado campeona!');

    // //     if (inputValue >100 || input<=0) {
    // //         return console.log('El número debe estar entre 1 y 100');
    // //         }
  }
}

button.addEventListener('click', getANumber);

//contador de intentos
