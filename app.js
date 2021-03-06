const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colours = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for (let i=0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColour(square))
    square.addEventListener('mouseleave', () => removeColour(square))

    board.append(square);

}

function setColour (element) {
    const colour = getRandomColour();
    element.style.backgroundColor = colour;
    element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`;
}

function removeColour (element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColour() {
    const index = Math.floor(Math.random()*colours.length);
    return colours[index];
}