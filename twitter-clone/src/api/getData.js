const getData = (endpoint) => {
  return fetch(`http://localhost:3001/${endpoint}`)
    .then(res => res.json())
    .catch(err => {
      throw new Error(`Error occurred while fetching data: ${err}`)
    })
}

export default getData
