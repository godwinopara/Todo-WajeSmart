import { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

function TodoForm({ addTodo }: AddTodoProps) {
  const [todoItem, setTodoItem] = useState<string>("");

  const handleChangeTodoItem = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoItem.trim() !== "") {
      addTodo(todoItem);
      setTodoItem("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" value={todoItem} placeholder="Enter Todo Item" onChange={handleChangeTodoItem} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
