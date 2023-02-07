import { uid } from "../utils/uid";
import { InitialState } from "./state";

export function reducer(state: InitialState, action: any) {
  switch (action.type) {
    case "ADD_TASK":
      const task = {
        content: action.payload,
        id: uid(),
        isDone: false,
      };
      return {
        ...state,
        todos: [...state.todos, task],
      };

    case "REMOVE_TASK":
      console.log(123123);
      return {
        ...state,
        todos: state.todos.filter((task) => task.id !== action.payload),
      };

    case "COMPLETE_TASK":
      const tasks = state.todos.map((task) => {
        if (task.id === action.payload) {
          task.isDone = !task.isDone;
        }
        return task;
      });
      return {
        ...state,
        todos: tasks,
      };

    default:
      return state;
  }
}
