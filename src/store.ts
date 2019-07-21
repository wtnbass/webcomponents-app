import { createStore, combineReducers, bindActionCreators } from "redux";

import count from "./counter-app/reducer";
import todos from "./todos-app/reducer";

const reducer = combineReducers({
  count,
  todos
});

export type StoreState = ReturnType<typeof reducer>;

export const store = createStore(reducer);

export const bindActions = (ac: any) => bindActionCreators(ac, store.dispatch);
