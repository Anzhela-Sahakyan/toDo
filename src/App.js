import "./App.css";
import Todo from "./components/ToDo/Todo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Todo />
      <TodoList text="Task 1" />
    </div>
  );
}

export default App;
