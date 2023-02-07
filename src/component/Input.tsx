import { useState } from "react";
import { store } from "../redux/store";

export const Input = () => {
  const [taskContent, setTaskContent] = useState("");

  const submitTask = () => {
    if (taskContent != "") {
      store.dispatch({
        type: "ADD_TASK",
        payload: taskContent,
      });
      setTaskContent("");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="Enter a task"
        value={taskContent}
      />
      <button onClick={submitTask}>Submit</button>
    </div>
  );
};
