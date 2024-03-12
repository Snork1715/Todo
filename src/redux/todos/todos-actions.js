import shortid from 'shortid'
import types from './todos-types'
import { createAction } from '@reduxjs/toolkit'

const deleteTodos = createAction(types.DELETE)
const toggleTodos = createAction(types.TOGGLE_COMPLITED)
const addTodos = createAction(types.ADD, (title) => ({
  payload: {
    id: shortid.generate(),
    title,
    completed: false,
  },
}))
const filterTodos = createAction(types.FILTER, (value) => ({
  payload: value,
}))

const actions = { deleteTodos, addTodos, filterTodos, toggleTodos }

export default actions
