import { View } from './view.js';
export class EvaluationView extends View {
  render(text) {
    // HTML
    const html = `<p>${text}</p>
    <button id='buttonStart'>Once more</button>`;
    this.app.innerHTML = html;

    // Eventhandler
    const buttonStart = document.getElementById('buttonStart');
    buttonStart.addEventListener('click', () => {
      this.presenter.buttonStartClicked();
    });
  }
}
