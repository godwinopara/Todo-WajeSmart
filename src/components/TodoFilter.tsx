import { TodoFilterProps } from "../types/Todo";

function TodoFilter({ filter, changeFilter }: TodoFilterProps) {
  return (
    <div>
      <div>
        <label htmlFor="all">All</label>
        <input type="radio" name="all" value="all" checked={filter === "all"} onChange={() => changeFilter("all")} />
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input
          type="radio"
          name="completed"
          value="completed"
          checked={filter === "completed"}
          onChange={() => changeFilter("completed")}
        />
      </div>
      <div>
        <label htmlFor="active">Active</label>
        <input
          type="radio"
          name="active"
          value="active"
          checked={filter === "active"}
          onChange={() => changeFilter("active")}
        />
      </div>
    </div>
  );
}

export default TodoFilter;
