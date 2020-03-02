import { View } from "./view.js";
import { questions } from "./questions.js";

export class Presenter {
  constructor() {
    this.view = new View(this);
    this.view.renderStartView();
    this.questionNumber = 0;
  }

  buttonClicked(buttonNumber) {
    if (buttonNumber === 0) {
      // Show first question
      this.questionNumber = 0;
      const question = questions[this.questionNumber].text;
      this.view.renderQuestionView();
      this.view.displayQuestion(question);
    } else if (this.questionNumber >= questions.length - 1) {
      this.view.renderEvaluation();
    } else {
      // Show next question
      this.questionNumber++;
      const question = questions[this.questionNumber].text;
      this.view.renderQuestionView();
      this.view.displayQuestion(question);
    }
  }
}
