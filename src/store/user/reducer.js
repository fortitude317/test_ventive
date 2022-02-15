import { types } from "./types"

const initialState = []

const reducer = (state = initialState, action) => {
    console.log("state", state)
    console.log("action.payload", action.payload)
    switch (action.type) {
        case types.SET_USER:
            return {
                ...action.payload
            };
        case types.REGISTER:
            return [...state , action.payload]

        default: 
            return state;
    }
}

export default reducer