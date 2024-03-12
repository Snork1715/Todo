import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import actions from "../../redux/todos/todos-actions";

const Filter = () => {
  const filter = useSelector(state => state.todos.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter-wrapper">
      <p className="filter__label">Filter Todos</p>
      <input
        type="text"
        placeholder="typing for filtering..."
        name="filter"
        value={filter}
        onChange={e => dispatch(actions.filterTodos(e.target.value))}
        className="filter-input"
      />
    </div>
  );
};

export default Filter;
