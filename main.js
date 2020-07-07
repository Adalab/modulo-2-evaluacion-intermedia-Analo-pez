'use strict';

const boxGame = document.querySelector('.enter__number');
const input = document.querySelector('.js-inputNumber');
const button = document.querySelector('.js-btn');
const textClue = document.querySelector('.js-clue');
const attempts = document.querySelector('.js-attempts');


function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

const number = getRandomNumber(100);
console.log(number);


function getANumber(ev) {
	ev.preventDefault();
	updateClue();
	updateCounter();
}


function updateClue() {
	const inputValue = parseInt(input.value);

	if (inputValue > 100 || inputValue < 1) {
		showClue('El número debe estar entre 1 y 100');
	}
	else if (inputValue > number) {
		showClue(`Demasiado Alto`);
	}
	else if (inputValue < number) {
		showClue('Demasiado bajo');
	}
	else if (inputValue === number) {
		showClue('Has ganado campeona!');
		const win = document.querySelector('.information');
		win.classList.add('colorClue');
		boxGame.remove();
	}
}

function showClue(text) {
	textClue.innerHTML = text;
}




let counterAttempts = 0;

function updateCounter() {
	counterAttempts++;
	attempts.innerHTML = counterAttempts;
}

button.addEventListener('click', getANumber);



