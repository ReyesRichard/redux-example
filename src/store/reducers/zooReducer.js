import uuid from 'react-uuid'

import {ADD_ANIMAL, UPDATE_ANIMAL, DELETE_ANIMAL} from 'store/actions/zooActions'

const initialState = [
    {
        id: uuid(),
        name: 'Leon',
        count: 2,
        origin: 'Africa'
    },
    {
        id: uuid(),
        name: 'Elefante',
        count: 16,
        origin: 'Africa'
    }
]

function zoo ( state = initialState, action){
    switch(action.type){
        case ADD_ANIMAL:
            // return state.concat(action.payload.animal) 
            return [...state, action.payload.animal]
        case UPDATE_ANIMAL:
            // return state.concat(action.payload.animal) 
            return [...state, action.payload.animal]
        case DELETE_ANIMAL:
            console.log( action.payload.animal)
            return state.filter( animal => animal.id !== action.payload.id)
        default:
            return state
    }
}

export default zoo