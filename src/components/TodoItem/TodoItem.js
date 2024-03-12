import { useDispatch } from 'react-redux'
import actions from '../../redux/todos/todos-actions'
import style from './TodoItem.module.css'

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(actions.deleteTodos(id))
  }
  function toggleCompleted() {
    dispatch(actions.toggleTodos(id))
  }

  return (
    <li
      key={id}
      className={`${style.todo__task} ${
        completed ? style.todo__task__checked : ''
      }`}
    >
      <label className={style.form_control}>
        <input
          type='checkbox'
          name='checkbox'
          onClick={toggleCompleted}
          // checked={completed}
        />
        <span>{title}</span>
      </label>
      <button className={style.todo__delete} onClick={handleDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
