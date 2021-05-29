import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
    new Todo("Eat Dinner"),
  ];

  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
