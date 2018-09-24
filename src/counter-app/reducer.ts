import { getType } from "typesafe-actions";
import { State, Action } from "./types";
import * as counter from "./actions";

export default function reducer(state: State = 0, action: Action): State {
  switch (action.type) {
    case getType(counter.increment):
      return state + 1;
    case getType(counter.decrement):
      return state - 1;
    default:
      return state;
  }
}
