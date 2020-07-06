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
		textClue.innerHTML = 'El número debe estar entre 1 y 100';
	}
	else if (inputValue > number) {
		textClue.innerHTML = `Demasiado Alto`;
	}
	else if (inputValue < number) {
		textClue.innerHTML = 'Demasiado bajo';
	}
	else if (inputValue === number) {
		textClue.innerHTML = 'Has ganado campeona!';
		const win = document.querySelector('.information');
		win.classList.add('colorClue');
		boxGame.remove();
	}
}

// quitar color/ bloquear cuando ganas


let counterAttempts = 0;

function updateCounter() {
	counterAttempts++;
	attempts.innerHTML = counterAttempts;
}

button.addEventListener('click', getANumber);



//CREAR UNA FUNCION PARA NO REPETIR (AUN POR HACER)
//rehacer array??
const showText = textClue.innerHTML;
