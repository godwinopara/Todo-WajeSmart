import { useEffect, useState } from "react";
import axios from "axios";
import { Filter, TodoProps } from "../types/Todo";
import TodoForm from "../components/TodoForm";
import TodoFilter from "../components/TodoFilter";
import TodoList from "../components/TodoList";

function Todo() {
  // State to manage the list of todos. Each todo has an id, text, and completion status.
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTodos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
          signal: controller.signal,
        });
        setTodos(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch Aborted");
        } else {
          setError("Error Fetching Data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();

    return () => {
      controller.abort();
    };
  }, []);

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
    setTodos([...todos, { id: todos.length + 1, title: text, completed: false }]);
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

  if (loading) {
    return <div>lOADING............</div>;
  }

  if (error) {
    return <div>error.............</div>;
  }

  return (
    <>
      <TodoForm addTodo={addTodoItem} />
      <TodoFilter filter={filter} changeFilter={handleChangeFilter} />
      <TodoList todos={filteredTodos} toggleCompleted={handleChangeTodo} removeTodo={handleRemoveTodo} />
    </>
  );
}

export default Todo;
