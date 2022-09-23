import Game from './Game';
import Popup from './Popup';
import Score from './Score';

const hit = document.querySelector('.score_hit');
const miss = document.querySelector('.score_miss');
const field = document.querySelector('.field');
const cell = Array.from(document.querySelectorAll('.cell'));
const start = document.querySelector('.btn_start');
const stop = document.querySelector('.btn_stop');
const popup = document.querySelector('.popup_container');
const popupClose = document.querySelector('.popup_close');
const popupBtn = document.querySelector('.popup_btn');

const game = new Game(cell);
const popupWindow = new Popup(popup, popupClose, popupBtn);
const score = new Score(hit, miss);

start.addEventListener('click', (e) => {
  e.preventDefault();
  game.startGame();
  score.displayReset();
});

stop.addEventListener('click', (e) => {
  e.preventDefault();
  game.stopGame();
});

popupClose.addEventListener('click', (e) => {
  e.preventDefault();
  popupWindow.popupClosed();
});

popupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popupWindow.popupStartGame(game);
  score.displayReset();
});

field.addEventListener('click', (event) => {
  event.preventDefault();
  const click = event.target;
  if (click.classList.contains('goblin')) {
    score.hitCounter();
    click.classList.remove('goblin');
  } else {
    score.missCounter();
    score.popupOpen(popupWindow, game);
  }
});