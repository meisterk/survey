import { View } from "./view.js";
export class Presenter {
  constructor() {
    this.view = new View(this);
    this.view.renderStartView();
    this.questionNumber = 0;
  }

  buttonClicked(n) {
    if (n === 0) {
      this.questionNumber = 1;
      const question = "Question " + this.questionNumber + "?";
      this.view.renderQuestionView();
      this.view.displayQuestion(question);
    } else {
      this.questionNumber++;
      const question = "Question " + this.questionNumber + "?";
      this.view.renderQuestionView();
      this.view.displayQuestion(question);
    }
  }
}
