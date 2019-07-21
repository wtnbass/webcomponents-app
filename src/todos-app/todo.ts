export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let nextId = 0;

export const newTodo = (text: string): Todo => ({
  id: nextId++,
  text,
  completed: false
});
