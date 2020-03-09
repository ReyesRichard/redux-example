// actions types
export const ADD_ANIMAL = 'add_animal'
export const DELETE_ANIMAL = 'delete_animal'
export const UPDATE_ANIMAL = 'update_animal'

// actions creators
export function add_animal(animal){
    return {
        type: ADD_ANIMAL,
        payload: {
            animal
        }
    }
}
export function update_animal(animal){
    return {
        type: UPDATE_ANIMAL,
        payload: {
            animal
        }
    }
}
export function deleted_animal(id){
    return {
        type: DELETE_ANIMAL,
        payload: {
            id
        }
    }
}