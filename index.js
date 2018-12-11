const grid = document.querySelector('.game-grid');
const cells = document.querySelectorAll('.board');
const button = document.querySelector('button');
let count = 0;

button.addEventListener('click', () => {
  window.location.reload();
});

let xArray = [];
let oArray = [];

let winningCombos = [
  ['one', 'two', 'three'],
  ['one', 'four', 'seven'],
  ['one', 'five', 'nine'],
  ['seven', 'eight', 'nine'],
  ['three', 'six', 'nine'],
  ['two', 'five', 'eight'],
  ['three', 'five', 'seven'],
];

cells.forEach(cell => {
  let clicked = false;
  cell.addEventListener('click', () => {
    if (clicked === false) {
      if (count < cells.length) {
        clicked = true;
        const playingPiece = count % 2 === 0 ? 'X' : 'O';
        const input = document.createElement('p');
        input.innerText = playingPiece;
        cell.appendChild(input);
        count++;
        if (playingPiece === 'X') {
          xArray.push(cell.id);
          whoWins(xArray, winningCombos);
        } else {
          oArray.push(cell.id);
          whoWins(oArray, winningCombos);
        }
      }
    } else {
      count < cells.length
        ? alert('Choose another square')
        : alert('Game Over!');
    }
  });
});

const whoWins = (array1, winningCombo) => {
  for (let i = 0; i < winningCombo.length; i++) {
    if (winningCombo[i].every(arr => array1.indexOf(arr) >= 0)) {
      winningCombo[i].forEach(element => {
        document.getElementById(element).className = 'winners';
      });
      alert('You Win! Congratulations!');
    }
  }
};
