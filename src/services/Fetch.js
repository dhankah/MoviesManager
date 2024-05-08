const Fetch = async (url) => {
  try {
    const response = await fetch(`http://localhost:4000/${url}`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json()
  } catch (error) {
      console.error('Error fetching search results:', error);
    }
}
  
  export default Fetch