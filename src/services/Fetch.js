const Fetch = async (url) => {
    const request = new Request(`http://localhost:4000/${url}`)

    const response = await fetch(request)
    return await response.json()
  }
  
  export default Fetch