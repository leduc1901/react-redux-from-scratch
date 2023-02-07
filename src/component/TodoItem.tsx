import { Task } from "../redux/state";
import { store } from "../redux/store";

type ToDoItemProps = {
  task: Task;
};

export const TodoItem = ({ task }: ToDoItemProps) => {
  const deleteTask = (id: string) => {
    store.dispatch({
      type: "REMOVE_TASK",
      payload: id,
    });
  };

  const completeTask = (id: string) => {
    store.dispatch({
      type: "COMPLETE_TASK",
      payload: id,
    });
  };

  return (
    <li>
      <div className="todoItem">
        <input
          type="checkbox"
          onChange={() => completeTask(task.id)}
          checked={task.isDone}
        />
        <p>{task.content}</p>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};
