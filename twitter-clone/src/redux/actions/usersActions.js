import * as types from './actionTypes'
import * as usersApi from '../../api/usersApi'
import {setCurrentUser} from "./currentUserActions";

export const loadUsers = () => {
  return (dispatch) => {
    return usersApi
      .getUsers()
      .then(users => {
        dispatch({
          type: types.LOAD_USERS,
          users
        })
      })
      .catch(error => {
        throw error
      })
  }
}

export const addUser = (user) => {
  return (dispatch) => {
    return usersApi
      .addUser(user)
      .then((user) => {
        dispatch({
          type: types.ADD_USER,
          user
        })

        setCurrentUser({
          id: user.id,
          name: user.name
        })

        alert('user created. redirecting to login page')
      })

      .catch(error => {
        throw error
      })
  }
}

export const findUser = (user) => {
  return (dispatch) => {
    return usersApi
      .getUser(user)
      .then((user) => {
        dispatch({
          type: types.FIND_USER,
          user
        })

        setCurrentUser({
          id: user.id,
          name: user.name
        })

        alert('successfully logged in')
      })
      .catch(error => {
        throw error
      })
  }
}
