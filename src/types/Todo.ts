export interface TodoItemProps {
  todo: TodoProps;
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
}

export interface TodoListProps {
  todos: TodoProps[];
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
}

export interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoFilterProps {
  filter: Filter;
  changeFilter: (filter: Filter) => void;
}

export type Filter = "all" | "completed" | "active";
