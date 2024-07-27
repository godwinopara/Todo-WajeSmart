import { TodoFilterProps } from "../types/Todo";

function TodoFilter({ filter, changeFilter }: TodoFilterProps) {
  return (
    <div className="flex py-4 gap-x-3">
      <div>
        <label htmlFor="all" className="mr-2">
          All
        </label>
        <input type="radio" name="all" value="all" checked={filter === "all"} onChange={() => changeFilter("all")} />
      </div>
      <div>
        <label htmlFor="completed" className="mr-2">
          Completed
        </label>
        <input
          type="radio"
          name="completed"
          value="completed"
          checked={filter === "completed"}
          onChange={() => changeFilter("completed")}
        />
      </div>
      <div>
        <label htmlFor="active" className="mr-2">
          Active
        </label>
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
