export class View {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
  }

  renderStartView(text) {
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

  renderQuestionView(questionText) {
    // HTML
    const html = `
    <p>${questionText}</p>
    <ul>
      <li><button id='button1'>One</button></li>
      <li><button id='button2'>Two</button></li>
      <li><button id='button3'>Three</button></li>
    </ul>
    `;
    this.app.innerHTML = html;

    // Eventhandler
    const button1 = document.getElementById('button1');
    button1.addEventListener('click', () => {
      this.presenter.buttonClicked(1);
    });
    const button2 = document.getElementById('button2');
    button2.addEventListener('click', () => {
      this.presenter.buttonClicked(2);
    });
    const button3 = document.getElementById('button3');
    button3.addEventListener('click', () => {
      this.presenter.buttonClicked(3);
    });
  }

  renderEvaluation(text) {
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
