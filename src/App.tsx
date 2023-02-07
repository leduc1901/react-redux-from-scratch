import { useSyncExternalStore } from "react";
import "./App.css";
import { store } from "./redux/store";
import { TodoItem } from "./component/TodoItem";
import { Input } from "./component/Input";

function App() {
  const { todos } = useSyncExternalStore(store.subscribe, store.getState);

  return (
    <div className="App">
      <header className="header">
        <h2>To do list</h2>
        <div>
          <Input />
          <ul>
            {todos.map((todo) => (
              <TodoItem key={todo.id} task={todo} />
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
