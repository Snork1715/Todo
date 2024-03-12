import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import actions from '../../redux/todos/todos-actions'
import style from './Stats.module.css'

const Stats = () => {
  const [filterType, setFilterType] = useState('all')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.items)

  const completed = todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0
  )
  const current = todos.length - completed

  return (
    <>
      <h2>Todo's</h2>
      <ul className={style.todo__info_list}>
        <li>
          Completed <span>{completed}</span>,
        </li>
        <li>
          Pending <span>{current}</span>,
        </li>
        <li>
          Filter
          <select
            className={style.stats__filter___dropdown}
            value={filterType}
            onChange={(e) => {
              dispatch(actions.filterTodos(e.target.value))
              setFilterType(e.target.value)
            }}
          >
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='current'>Current</option>
          </select>
        </li>
      </ul>
    </>
  )
}

export default Stats
