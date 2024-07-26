import { ChangeEvent, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // State to manage the list of todos. Each todo has an id, text, and completion status.
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Do laundry", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  // Function to handle the toggling of a todo's completion status
  // It takes an id and updates the corresponding todo's 'completed' status
  const handleChangeTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    );
  };

  // Function to remove a todo by its id
  // It filters out the todo with the matching id from the todos array
  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (text: string) => {
    setTodos([...todos, { id: todos.length + 1, text: text, completed: false }]);
  };

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  // Function to filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true; // "all" filter shows all todos
  });

  return (
    <>
      <TodoForm addTodo={addTodoItem} />
      <div>
        <div>
          <label htmlFor="all">All</label>
          <input type="radio" name="all" value="all" checked={filter === "all"} onChange={handleChangeFilter} />
        </div>
        <div>
          <label htmlFor="completed">Completed</label>
          <input
            type="radio"
            name="completed"
            value="completed"
            checked={filter === "completed"}
            onChange={handleChangeFilter}
          />
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <input
            type="radio"
            name="active"
            value="active"
            checked={filter === "active"}
            onChange={handleChangeFilter}
          />
        </div>
      </div>
      <TodoList todos={filteredTodos} toggleCompleted={handleChangeTodo} removeTodo={handleRemoveTodo} />
    </>
  );
}

export default App;
