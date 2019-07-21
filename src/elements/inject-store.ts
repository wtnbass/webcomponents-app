import { store, StoreState } from "../store";
import { Unsubscribe } from "redux";

export type StateChangedEvent = CustomEvent<{ state: StoreState }>;

export class InjectStore extends HTMLElement {
  unsubscribe!: Unsubscribe;

  connectedCallback() {
    const event: StateChangedEvent = new CustomEvent("state-changed", {
      detail: {
        get state() {
          return store.getState();
        }
      }
    });

    this.unsubscribe = store.subscribe(() => this.dispatchEvent(event));
    this.dispatchEvent(event);
  }

  disconnecteCallback() {
    this.unsubscribe();
  }
}

customElements.define("inject-store", InjectStore);
