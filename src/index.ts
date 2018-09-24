import "@webcomponents/webcomponentsjs";

import { define } from "./lib/define";
import { PureElement } from "./lib/pure-element";
import "./counter-app/counter-app";
import "./todos-app/todos-app";

@define("webcomponents-app")
export class App extends PureElement {
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
