import { ADD_USER } from '../constants/action-types'
import { REMOVE_USER } from '../constants/action-types'
import { USER_LOGIN } from '../constants/action-types'

export const addUser = user => ({ type: ADD_USER, payload: user })

export const removeUser = user => ({ type: REMOVE_USER, payload: user })

export const userLogin = user => ({ type: USER_LOGIN, payload: user })
