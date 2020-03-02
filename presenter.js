import { View } from "./view.js";
export class Presenter {
  constructor() {
    this.view = new View(this);
  }
}
