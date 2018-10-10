import { createStore, combineReducers, bindActionCreators } from "redux";

import count from "./counter-app/reducer";
import { Action as CounterAction } from "./counter-app/types";
import todos from "./todos-app/reducer";
import { Action as TodosAction } from "./todos-app/types";
import { StateType } from "typesafe-actions";

const reducer = combineReducers({
  count,
  todos
});

export const store = createStore(reducer);

export type Action = CounterAction | TodosAction;

export type State = StateType<typeof reducer>;

export const bindActions = (ac: any) => bindActionCreators(ac, store.dispatch);
