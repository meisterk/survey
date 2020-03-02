import { View } from "./view.js";
import { questions } from "./questions.js";

export class Presenter {
  constructor() {
    this.view = new View(this);
    this.questionNumber = 0;
    this.view.renderStartView();
  }

  buttonClicked(buttonNumber) {
    if (buttonNumber === 0) {
      // Show first question
      this.questionNumber = 0;
      const question = questions[this.questionNumber].text;
      this.view.renderQuestionView(question);
    } else if (this.questionNumber >= questions.length - 1) {
      // Show evaluation
      this.view.renderEvaluation();
    } else {
      // Show next question
      this.questionNumber++;
      const question = questions[this.questionNumber].text;
      this.view.renderQuestionView(question);
    }
  }
}
