import React from 'react'
import TodoItem from '../TodoItem'
import { useSelector } from 'react-redux'
import style from './TodoList.module.css'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items)
  const filter = useSelector((state) => state.todos.filter)
  const normalizeFilter = filter.toLowerCase()

  const setVisibleTodos = () => {
    switch (normalizeFilter) {
      case 'all':
        return todos
      case 'completed':
        return todos.filter(({ completed }) => completed === true)
      case 'current':
        return todos.filter(({ completed }) => completed !== true)
      default:
        return todos
    }
  }

  const visibleTodos = setVisibleTodos()

  return (
    <>
      {visibleTodos.length > 0 ? (
        <ul className={style.todo__tasks}>
          {visibleTodos.map((item) => (
            <TodoItem
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          ))}
        </ul>
      ) : (
        <div className={style.list_empty}>No ToDo`s found`</div>
      )}
    </>
  )
}

export default TodoList
