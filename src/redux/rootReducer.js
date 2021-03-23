import {combineReducers} from 'redux'
import todoReducer from './todolist/todoReducer'
const rootReducer = combineReducers({
    todo :todoReducer
})

export default rootReducer