export default class Popup {
  constructor(popup, popupClose, popupBtn) {
    this.popup = popup;
    this.popupClose = popupClose;
    this.popupBtn = popupBtn;
  }

  popupOpen() {
    this.popup.classList.remove('popup_hidden');
  }

  popupClosed() {
    this.popup.classList.add('popup_hidden');
  }

  // eslint-disable-next-line class-methods-use-this
  popupStartGame(play) {
    this.popup.classList.add('popup_hidden');
    play.startGame();
  }
}