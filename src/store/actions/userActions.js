// actions types
export const SET_NAME = 'set_name'

// actions creators
export function setName (name){
    return {
        type: SET_NAME,
        payload : {
            name
        }
    }
}