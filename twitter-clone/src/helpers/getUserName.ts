import {UserType} from "../types/types";
import {store} from "../index";

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

const getUserName = (authorId: string, users: UserType[]): string => {
  console.log(authorId, users)
  const matchingUser = users.find((user: UserType) => user.id === authorId)

  if (matchingUser!.name) {
    return matchingUser!.name
  }
  return authorId
}

export default getUserName
