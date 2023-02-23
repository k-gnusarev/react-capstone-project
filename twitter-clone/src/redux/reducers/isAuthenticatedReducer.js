import initialState from "./initialState";
import * as types from '../actions/actionTypes'

const isAuthenticatedReducer = (state = initialState.isAuthenticated, action) => {
  switch (action.type) {
    case types.SET_IS_AUTHENTICATED: {
      return action.isAuthenticated
    }
    default:
      return state
  }
}

export default isAuthenticatedReducer
