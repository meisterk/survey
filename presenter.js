import { StartView } from './startview.js';
import { QuestionView } from './questionview.js';
import { EvaluationView } from './evaluationview.js';
import { questions } from './questions.js';

export class Presenter {
  constructor() {
    // Start
    this.view = new StartView(this);
    this.view.render('Here is how it works: blah blah');
  }

  buttonStartClicked() {
    // Show first question
    this.questionNumber = 0;
    const question = questions[this.questionNumber].text;
    this.view = new QuestionView(this);
    this.view.render(question);
  }

  buttonClicked(buttonNumber) {
    if (this.questionNumber < questions.length - 1) {
      // Show next question
      this.questionNumber++;
      const question = questions[this.questionNumber].text;
      this.view.render(question);
    } else {
      // Show evaluation
      this.view = new EvaluationView(this);
      this.view.render('Evaluation: blah blah');
    }
  }
}
