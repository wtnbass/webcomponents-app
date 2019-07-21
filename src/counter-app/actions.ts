export const increment = () => ({
  type: "counter/INCREMENT" as "counter/INCREMENT"
});

export const decrement = () => ({
  type: "counter/DECREMENT" as "counter/DECREMENT"
});

export type Action = ReturnType<typeof increment | typeof decrement>;
