import { Action } from "./actions";

export type State = number;

export default function reducer(state: State = 0, action: Action): State {
  switch (action.type) {
    case "counter/INCREMENT":
      return state + 1;
    case "counter/DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
