import { createStore } from 'redux'
import rootReducers from 'store/reducers'

let store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Crea un observer que se ejecuta cuando hay cambios
// store.subscribe( ()=> {
//     console.log( 'State store: ', store.getState() )
// })

// Ejecuta acciones que modifican el state del store
// store.dispatch({type: 'increment'})
// store.dispatch({ type: 'increment'})
export default store
