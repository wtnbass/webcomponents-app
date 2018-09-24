import { Store } from "redux";
import { Constructor } from "./types";

export interface ConnectedElement<S> {
  connectedCallback?(): void;
  disconnectedCallback?(): void;
  stateChangedCallback(state: S): void;
}

export const connect = <S>(store: Store) => <
  T extends Constructor<ConnectedElement<S>>
>(
  BaseClass: T
) =>
  class extends BaseClass {
    private __unsubscribe!: () => void;

    connectedCallback() {
      this.stateChangedCallback(store.getState());

      this.__unsubscribe = store.subscribe(() =>
        this.stateChangedCallback(store.getState())
      );

      super.connectedCallback && super.connectedCallback();
    }

    disconnectedCallback() {
      this.__unsubscribe();
      super.disconnectedCallback && super.disconnectedCallback();
    }
  };
