import {UserType} from "../types/types";

const mockTweets = [
  {
    "id": "1",
    "author_id": "johnsmith",
    "text": "What are the pros of object-oriented programming?<br><br>Please, explain as if I'm 5."
  },
  {
    "id": "2",
    "author_id": "carlanotarobot",
    "text": "Why use a debugger when you can fill your code with hundreds of <code>print()</code> statements?"
  },
  {
    "id": "3",
    "author_id": "ameliawarner",
    "text": "Describe your relationship with JavaScript with one word."
  }
]

const mockUsers = [
  {
    "id": "johnsmith",
    "name": "John Smith",
    "email": "johnsmith@gmail.com"
  },
  {
    "id": "carlanotarobot",
    "name": "Carla Notarobot",
    "email": "carlanotarobot@hotmail.com"
  },
  {
    "id": "ameliawarner",
    "name": "Amelia Warner",
    "email": "ameliawarner@yahoo.com"
  }
]

const getUserName = (authorId: string): string => {
  const matchingUser = mockUsers.find(user => user.id === authorId)

  if (matchingUser!.name) {
    return matchingUser!.name
  }
  return authorId
}

export default getUserName
