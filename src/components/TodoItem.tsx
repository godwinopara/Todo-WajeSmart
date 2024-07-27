import { TodoItemProps } from "../types/Todo";
import { MdDeleteForever } from "react-icons/md";
const TodoItem: React.FC<TodoItemProps> = function ({ todo, removeTodo, toggleCompleted }) {
  return (
    <li key={todo.id} className="flex items-center justify-between gap-x-6 mb-4">
      <div className="flex gap-x-2 w-[80%] lg:gap-x-5">
        <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }} className="lg:text-lg">
          {todo.title}
        </span>
      </div>
      <button onClick={() => removeTodo(todo.id)} className="text-red-600 text-2xl">
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoItem;
