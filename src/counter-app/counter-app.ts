import { html, LitElement, property } from "lit-element";
import { increment, decrement } from "./actions";
import { bindActions } from "../store";
import { StateChangedEvent } from "../elements/inject-store";

import "../elements/inject-store";

class CounterApp extends LitElement {
  @property()
  count = 0;

  actions = bindActions({
    increment,
    decrement
  });

  increment = () => this.actions.increment();

  decrement = () => this.actions.decrement();

  onStateChanged = (e: StateChangedEvent) => {
    this.count = e.detail.state.count;
  };

  render() {
    return html`
      <inject-store @state-changed=${this.onStateChanged}></inject-store>
      <div>${this.count}</div>
      <button @click=${this.increment}>+</button>
      <button @click=${this.decrement}>-</button>
    `;
  }
}

customElements.define("counter-app", CounterApp);
