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
    <form onSubmit={handleAddTodo} className="flex justify-center mb-8">
      <input
        className="border py-3 px-3 mr-3 lg:w-[60%]"
        type="text"
        value={todoItem}
        placeholder="Enter Todo Item"
        onChange={handleChangeTodoItem}
      />
      <button type="submit" className="bg-black text-white py-3 px-4 round-md">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
