import {BASE_URL} from "../helpers/constants";
import {handleError, handleResponse} from "./apiUtils";

export const getTweets = () => {
  return fetch(BASE_URL + 'tweets')
    .then(handleResponse)
    .catch(handleError)
}

export const addTweet = (tweet) => {
  const body = JSON.stringify({
    author_id: 'johnsmith',
    ...tweet
  })
  return fetch(BASE_URL + 'tweets', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body
  })
    .then(handleResponse)
    .catch(handleError)
}
