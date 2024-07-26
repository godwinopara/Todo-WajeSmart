import { TodoItemProps } from "../types/Todo";

const TodoItem: React.FC<TodoItemProps> = function ({ todo, removeTodo, toggleCompleted }) {
  return (
    <li key={todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
