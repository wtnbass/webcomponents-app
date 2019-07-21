import { newTodo } from "./todo";

export const addTodo = (text: string) => ({
  type: "todos/ADD_TODO" as "todos/ADD_TODO",
  payload: newTodo(text)
});

export const toggleComplete = (id: number) => ({
  type: "todos/TOGGLE_COMPLETE" as "todos/TOGGLE_COMPLETE",
  payload: id
});

export type Action =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleComplete>;
