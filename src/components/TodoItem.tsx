interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = function ({ todo, toggleCompleted, removeTodo }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />

      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
