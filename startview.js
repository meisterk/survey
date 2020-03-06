import { View } from './view.js';
export class StartView extends View {
  render(text) {
    // HTML
    const html = `<p>${text}</p>
        <button id='buttonStart'>Start</button>`;
    this.app.innerHTML = html;

    // Eventhandler
    const buttonStart = document.getElementById('buttonStart');
    buttonStart.addEventListener('click', () => {
      this.presenter.buttonStartClicked();
    });
  }
}
