import { LitElement, html, property, query } from "@polymer/lit-element";
import { store, State } from "../store";
import { connect, ConnectedElement } from "../lib/connect";
import { Todo } from "./types";
import * as actions from "./actions";
import { define } from "../lib/define";

@define("todos-app")
@connect(store)
export class TodosApp extends LitElement implements ConnectedElement<State> {
  @property()
  todos: Todo[] = [];

  @query("#todo-input")
  input!: HTMLInputElement;

  addTodo = () => {
    store.dispatch(actions.addTodo(this.input.value));
    this.input.value = "";
  };

  toggleComplete = (id: number) => store.dispatch(actions.toggleComplete(id));

  stateChangedCallback(state: State) {
    this.todos = state.todos;
  }

  render() {
    return html`
      <style>
        .todo-completed {
          text-decoration: line-through;
        }
      </style>
      <ul>
        ${this.todos.map(
          todo => html`
          <li
            class="${todo.completed ? "todo-completed" : ""}"
            @click=${() => this.toggleComplete(todo.id)}
            >
            ${todo.text}
          </li>
        `
        )}
      </ul>
      <div>
        <input type="text" id="todo-input">
        <button @click=${this.addTodo}>Add</button>
      </div>
  `;
  }
}
