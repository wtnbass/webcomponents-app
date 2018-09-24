export abstract class PureElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = this.render();
  }

  protected abstract render(): string;
}
