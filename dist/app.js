import { ImageComponent } from "./components/page/item/image.js";
import { pageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new pageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
