import { BaseComponent } from "./component.js";

export class pageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`
    <ul class="page">
      This is PageComponent!
    </ul>`);
  }
}
