import { View } from './view.js';
import { questions } from './questions.js';

export class Presenter {
  constructor() {
    this.view = new View(this);
    // Start
    this.view.renderStartView('Here is how it works: blah blah');
  }

  buttonStartClicked() {
    // Show first question
    this.questionNumber = 0;
    const question = questions[this.questionNumber].text;
    this.view.renderQuestionView(question);
  }

  buttonClicked(buttonNumber) {
    if (this.questionNumber < questions.length - 1) {
      // Show next question
      this.questionNumber++;
      const question = questions[this.questionNumber].text;
      this.view.renderQuestionView(question);
    } else {
      // Show evaluation
      this.view.renderEvaluation('Evaluation: blah blah');
    }
  }
}
