export default class Game {
  constructor(cell) {
    this.cell = cell;
    this.int = 0;
  }

  goblin() {
    const index = Math.floor(Math.random() * this.cell.length);
    this.cell.forEach((item) => {
      item.classList.remove('goblin');
    });
    this.cell[index].classList.add('goblin');
  }

  startGame() {
    const interval = setInterval(() => {
      this.goblin();
    }, 1000);
    this.int = interval;
  }

  stopGame() {
    clearInterval(this.int);
    this.cell.forEach((item) => {
      item.classList.remove('goblin');
    });
  }
}