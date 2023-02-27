const getInitials = (name: string) => {
  if(name.length > 0) {
    return name
      .split(' ')
      .map((word, index) => {
        if (index < 2) {
          return word[0].toUpperCase()
        }
        return null
      })
      .join('')
  }
  return ''
}
export default getInitials
