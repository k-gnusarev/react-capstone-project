import initialState from "./initialState";
import * as types from '../actions/actionTypes'

const currentUserReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER: {
      return action.currentUser
    }
    default:
      return state
  }
}

export default currentUserReducer
