import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import zoo from './zooReducer'

const todoApp = combineReducers({
    counter,
    user,
    zoo,
})

export default todoApp
