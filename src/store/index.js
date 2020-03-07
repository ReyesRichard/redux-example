import { createStore } from 'redux'
import reducers from 'store/reducers'

let store = createStore(reducers)

export default store