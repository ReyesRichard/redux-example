import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'

const todoApp = combineReducers({
    counter,
    user,
})

export default todoApp
