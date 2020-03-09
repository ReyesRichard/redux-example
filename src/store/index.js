import { createStore } from 'redux'
import reducers from 'store/reducers'

let store = createStore(reducers)

store.subscribe( ()=> {
    console.log( 'State store: ', store.getState() )
})

store.dispatch({
    type: 'increment'
})
store.dispatch({
    type: 'increment'
})


export default store
