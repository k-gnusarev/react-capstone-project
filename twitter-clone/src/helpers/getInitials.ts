const getInitials = (name: string) => name
  .split(' ')
  .map((word, index) => {
  if (index < 2) {
    return word[0].toUpperCase()
  }
})
  .join('')

export default getInitials
