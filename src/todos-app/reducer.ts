import { getType } from "typesafe-actions";
import { Action, State } from "./types";
import * as todos from "./actions";

export default function reducer(state: State = [], action: Action): State {
  switch (action.type) {
    case getType(todos.addTodo):
      return [...state, action.payload];
    case getType(todos.toggleComplete):
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}
