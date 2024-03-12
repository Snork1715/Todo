import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './todos/todos-reducers'

const rootReducer = combineReducers({
  todos: itemsReducer,
})

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
})

export default store
