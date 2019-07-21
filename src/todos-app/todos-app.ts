import { LitElement, html, property, query } from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import { Todo } from "./todo";
import { addTodo, toggleComplete } from "./actions";
import { StateChangedEvent } from "../elements/inject-store";
import { bindActions } from "../store";

import "../elements/inject-store";

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
        ${repeat(
          this.todos,
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
        <input type="text" id="todo-input" />
        <button @click=${this.addTodo}>Add</button>
      </div>
    `;
  }
}

customElements.define("todos-app", TodosApp);
