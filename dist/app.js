import { pageComponent } from "./components/page.js";
class App {
    constructor(appRoot) {
        this.page = new pageComponent();
        this.page.attachTo(appRoot);
    }
}
new App(document.querySelector(".document"));
