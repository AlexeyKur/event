export default class Score {
  constructor(hit, miss) {
    this.hit = hit;
    this.miss = miss;
    this.hitContent = 0;
    this.missContent = 0;
  }

  hitDisplay() {
    this.hit.textContent = `Попаданий: ${this.hitContent}`;
  }

  missDisplay() {
    this.miss.textContent = `Пропущено: ${this.missContent}`;
  }

  displayReset() {
    this.hitContent = 0;
    this.missContent = 0;
    this.hitDisplay();
    this.missDisplay();
  }

  hitCounter() {
    this.hitContent += 1;
    this.hitDisplay();
  }

  missCounter() {
    this.missContent += 1;
    this.missDisplay();
  }

  popupOpen(popupWindow, game) {
    if (this.missContent >= 5) {
      popupWindow.popupOpen();
      game.stopGame();
    }
  }
}