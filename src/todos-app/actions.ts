import { createAction } from "typesafe-actions";
import { Todo } from "./types";

let nextId = 0;
const newTodo = (text: string): Todo => ({
  id: nextId++,
  text,
  completed: false
});

export const addTodo = createAction(
  "todos/ADD_TODO",
  resolve => (text: string) => resolve(newTodo(text))
);

export const toggleComplete = createAction(
  "todos/TOGGLE_COMPLETE",
  resolve => (id: number) => resolve(id)
);
