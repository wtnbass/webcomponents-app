import { LitElement, html, property, query } from "@polymer/lit-element";
import { Todo } from "./types";
import { addTodo, toggleComplete } from "./actions";
import { StateChangedEvent } from "../inject-store";
import { bindActions } from "../store";

import "../inject-store";

class TodosApp extends LitElement {
  @property()
  todos: Todo[] = [];

  @query("#todo-input")
  input!: HTMLInputElement;

  actions = bindActions({
    addTodo,
    toggleComplete
  });

  addTodo = () => {
    this.actions.addTodo(this.input.value);
    this.input.value = "";
  };

  toggleComplete = (id: number) => this.actions.toggleComplete(id);

  onStateChanged = (e: StateChangedEvent) => {
    this.todos = e.detail.state.todos;
  };

  render() {
    return html`
      <style>
        .todo-completed {
          text-decoration: line-through;
        }
      </style>
      <inject-store @state-changed=${this.onStateChanged}></inject-store>
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

customElements.define("todos-app", TodosApp);
