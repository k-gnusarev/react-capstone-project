import {UserType} from "../types/types";

const getUserName = (authorId: string, users: UserType[]): string => {
  const matchingUser = users.find((user: UserType) => user.id === authorId)

  if (matchingUser!.name) {
    return matchingUser!.name
  }
  return authorId
}

export default getUserName
