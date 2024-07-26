import { TodoListProps } from "../types/Todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<TodoListProps> = function ({ todos, toggleCompleted, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />;
      })}
    </ul>
  );
};

export default TodoList;
