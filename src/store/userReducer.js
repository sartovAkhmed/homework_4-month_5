const initialState = {
    name: '',
    age: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {name: action.payload, age: action.payloadOne}
        default:
            return state
    }
}