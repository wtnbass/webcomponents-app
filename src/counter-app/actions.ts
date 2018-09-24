import { createAction } from "typesafe-actions";

export const increment = createAction("counter/INCREMENT");
export const decrement = createAction("counter/DECREMENT");
