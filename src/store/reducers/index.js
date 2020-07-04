/* eslint-disable security/detect-object-injection */
import { ADD_USER, REMOVE_USER, USER_LOGIN } from '../constants/action-types.js'

const initialState = {
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            if (!action.payload.length) {
                return {
                    ...state,
                    users: [...state.users, action.payload]
                }
            }
            return {
                ...state,
                users: action.payload
            }
        case REMOVE_USER:
            if (!action.payload.length) {
                const mutableState = state
                for (let i = 0; i < mutableState.users.length; i++) {
                    if (mutableState.users[i] === action.payload) {
                        mutableState.users.splice(i, 1)
                        i--
                    }
                }
                console.log(mutableState)
                return {
                    ...state,
                    users: [...mutableState.users]
                }
            }
            return {
                ...state,
                users: action.payload
            }
        case USER_LOGIN:
            if (!action.payload.length) {
                return {
                    ...state,
                    users: [...state.users, action.payload]
                }
            }
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default rootReducer
