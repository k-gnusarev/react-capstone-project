export const handleResponse = async (response) => {
  if (response.ok) {
    return response.json()
  }
  if (response.status === 400) {
    const error = await response.text()
    throw new Error(error)
  }
  throw new Error('something went wrong :(')
}

export const handleError = (error) => {
  console.error('something went wrong. error code: ', error)
  throw error
}
