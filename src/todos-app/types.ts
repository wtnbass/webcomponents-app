import { ActionType } from "typesafe-actions";
import * as todos from "./actions";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type State = Todo[];

export type Action = ActionType<typeof todos>;
