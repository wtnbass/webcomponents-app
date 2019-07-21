import { Action } from "./actions";
import { Todo } from "./todo";

export type State = Todo[];

export default function reducer(state: State = [], action: Action): State {
  switch (action.type) {
    case "todos/ADD_TODO":
      return [...state, action.payload];
    case "todos/TOGGLE_COMPLETE":
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
