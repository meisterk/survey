export class View {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById("app");
  }

  displayText(text) {
    this.app.innerHTML = text;
  }
}
