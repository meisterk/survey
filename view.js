export class View {
  constructor(presenter) {
    this.presenter = presenter;
  }

  renderQuestionView() {
    this.app = document.getElementById("app");
    this.pNode = document.createElement("p");
    this.app.appendChild(this.pNode);
    this.divNode = document.createElement("div");
    this.app.appendChild(this.divNode);
    const html = `<ul>
    <li><button>One</button></li>
    <li><button>Two</button></li>
    <li><button>Three</button></li>
    <li><button>Four</button></li>
    <li><button>Five</button></li>
    </ul>
    `;
    this.divNode.innerHTML = html;
  }

  displayQuestion(text) {
    this.pNode.innerHTML = text;
  }
}
