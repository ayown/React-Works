import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gray-500">
      <h1 className="text-4xl font-semibold">TODOS</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
