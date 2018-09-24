import { Constructor } from "./types";

export const define = (name: string) => <T extends HTMLElement>(
  element: Constructor<T>
) => {
  window.customElements.define(name, element);
  return element as any;
};
