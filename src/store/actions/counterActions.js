// actionsTypes
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

// other contatants


// actions creators
export function increment() {
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT  }
}