import { pageComponent } from "./components/page.js";

class App {
  private readonly page: pageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new pageComponent();
    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
