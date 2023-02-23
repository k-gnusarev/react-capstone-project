import * as types from './actionTypes'
import * as usersApi from '../../api/usersApi'
import {useContext} from "react";
import {SET_CURRENT_USER} from "./actionTypes";
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
        //user - инфа, пришедшая с апи после создания
        // нового пользователя

        dispatch({
          type: types.ADD_USER,
          user
        })

        setCurrentUser({
              id: user.id,
              name: user.name
            })

        // dispatch({
        //   type: types.SET_CURRENT_USER,
        //   currentUser: {
        //     id: user.id,
        //     name: user.name
        //   }
        // })

        alert('user created. redirecting to login page')
      })

      .catch(error => {
        throw error
      })
  }
}
