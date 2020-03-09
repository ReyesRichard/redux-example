import {SET_NAME} from 'store/actions/userActions'

const initialState = {
    name: 'Pepe',
    email: 'pepe@corro.com',
    country: 'México'
}

function user ( state = initialState, action){
    console.log(action)
    switch(action.type){
        case SET_NAME:
            return {...state, name: action.payload.name} 
        default:
            return state
    }
}

export default user