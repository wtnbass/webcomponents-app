import "@webcomponents/webcomponentsjs";

import { PureElement } from "./elements/pure-element";
import "./counter-app/counter-app";
import "./todos-app/todos-app";

class App extends PureElement {
  render() {
    return `
      <section>
        <h3>Counter App</h3>
        <counter-app></counter-app>
      </section>
      <section>
        <h3>Todos App</h3>
        <todos-app></todos-app>
      </section>
    `;
  }
}

customElements.define("webcomponents-app", App);
