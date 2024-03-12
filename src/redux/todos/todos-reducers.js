import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import actions from './todos-actions'

const itemsState = [
  {
    id: 'id-01',
    title: 'Get React developer offer',
    completed: false,
  },
]

const itemsReducer = createReducer(itemsState, (builder) => {
  builder
    .addCase(actions.deleteTodos, (state, { payload }) => {
      return state.filter((item) => item.id !== payload)
    })
    .addCase(actions.addTodos, (state, { payload }) => {
      return [payload, ...state]
    })
    .addCase(actions.toggleTodos, (state, { payload }) => {
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      )
    })
})

const filterReducer = createReducer('', (builder) => {
  builder.addCase(actions.filterTodos, (_, { payload }) => {
    return payload
  })
})

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})
