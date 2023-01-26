import * as types from './actionTypes'
import * as usersApi from '../../api/usersApi'
import {apiCallError, beginApiCall} from "./apiStatusActions";
import {redirect} from "react-router-dom";

export const loadUsers = () => {
  return (dispatch) => {
    return usersApi
      .getUsers()
      .then(users => {
        console.log(users)
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
      .then((users) => {
        dispatch({
          type: types.ADD_USER,
          users
        })

        alert('user created. redirecting to login page')
        redirect('/')
      })
      .catch(error => {
        throw error
      })
  }
}
