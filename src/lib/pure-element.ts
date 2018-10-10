export abstract class PureElement extends HTMLElement {
  constructor() {
    super();
    const tmpl = document.createElement("template");
    tmpl.innerHTML = this.render();
    this.attachShadow({ mode: "open" }).appendChild(
      tmpl.content.cloneNode(true)
    );
  }

  protected abstract render(): string;
}
