import { ChangeEvent, FormEvent, useState } from "react";

function TodoForm() {
  const [todoItem, setTodoItem] = useState<string>("");

  const handleChangeTodoItem = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };

  /*
  Handle Form Submission: Add todo Item logic
  */
  const handleSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoItem("");
  };

  return (
    <form onSubmit={handleSubmitTodo}>
      <input type="text" value={todoItem} placeholder="Enter Todo Item" onChange={handleChangeTodoItem} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
