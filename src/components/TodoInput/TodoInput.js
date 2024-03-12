import { useDispatch } from 'react-redux'
import { useState } from 'react'
import actions from '../../redux/todos/todos-actions'
import style from './TodoInput.module.css'
import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TodoInput = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const notify = () =>
    toast.error('Todo`s title must be from 5 to 40 symbols!', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Flip,
    })

  const handleChange = (event) => {
    const { value } = event.currentTarget
    setTitle(value)
  }

  const handleSubmit = (event) => {
    if (title.length <= 40 && title.length >= 5) {
      event.preventDefault()
      dispatch(actions.addTodos(title))
      setTitle('')
    } else notify()
  }

  return (
    <>
      <div className={style.todo__add}>
        <input
          type='text'
          className={style.todo__input}
          placeholder='Add new task...'
          value={title}
          onChange={handleChange}
        />
        <button className={style.todo__add__btn} onClick={handleSubmit}>
          Add
        </button>
      </div>
      <ToastContainer />
    </>
  )
}

export default TodoInput
