export type Task = {
  id: string;
  content: string;
  isDone: boolean;
};

export type InitialState = {
  todos: Task[];
};

export const initialState: InitialState = { todos: [] };
