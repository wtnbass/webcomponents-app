import { html, LitElement, property } from "@polymer/lit-element";
import { store, State } from "../store";
import { connect, ConnectedElement } from "../lib/connect";
import { increment, decrement } from "./actions";
import { define } from "../lib/define";

@define("counter-app")
@connect(store)
export class CounterApp extends LitElement implements ConnectedElement<State> {
  @property()
  count = 0;

  increment = () => store.dispatch(increment());

  decrement = () => store.dispatch(decrement());

  stateChangedCallback(state: State) {
    this.count = state.count;
  }

  render() {
    return html`
      <div>${this.count}</div>
      <button @click=${this.increment}>+</button>
      <button @click=${this.decrement}>-</button>
    `;
  }
}
