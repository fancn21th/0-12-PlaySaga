import { combineReducers } from 'redux'

const todoList = (state = [], action) => {
  switch (action.type){
    case 'CREATE_TODO':
      return [...state, action.todo]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

const congrats = (state = false, action) => {
  switch (action.type){
    case 'SHOW_CONGRATS':
      return true
    default:
      return state
  }
}

const undoList = (state = {}, action) => {
  switch (action.type){
    case 'CREATE_TODO':
      return Object.assign({}, state, {[action.todo.id]: true})
    case 'REMOVE_TODO':
      return state
    case 'LOCK_UNDO':
      return Object.assign({}, state, {[action.id]: false})
    default:
      return state
  }
}

const todos = combineReducers({
  todoList,
  congrats,
  undoList
})

export default todos
