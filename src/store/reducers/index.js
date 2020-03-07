const initialState = {
    test: 'algo'
}
function reducerSimple ( state = initialState, action){
    switch( action.type) {
        case 'ADD':
            return state
        default:
            return state
    }
}

export default reducerSimple