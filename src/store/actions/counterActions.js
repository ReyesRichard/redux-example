// actionsTypes
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

// other contatants


// actions creators (se le pasan al dispatch)
export function increment() {
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT  }
}