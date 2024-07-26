import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { Filter } from "./types/Todo";

function App() {
  // State to manage the list of todos. Each todo has an id, text, and completion status.
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Do laundry", completed: false },
  ]);

  const [filter, setFilter] = useState<Filter>("all");

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

  const handleChangeFilter = (filter: Filter) => {
    setFilter(filter);
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
      <TodoFilter filter={filter} changeFilter={handleChangeFilter} />
      <TodoList todos={filteredTodos} toggleCompleted={handleChangeTodo} removeTodo={handleRemoveTodo} />
    </>
  );
}

export default App;
