import {BASE_URL} from "../helpers/constants";
import {handleError, handleResponse} from "./apiUtils";

export const getUsers = () => {
  return fetch(BASE_URL + 'users')
    .then(handleResponse)
    .catch(handleError)
}

export const addUser = (user) => {
  const body = JSON.stringify(user)
  return fetch(BASE_URL + 'users', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body
  })
    .catch(handleError)
}
