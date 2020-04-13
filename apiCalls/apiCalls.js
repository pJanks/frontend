export const fetchAllUserActivities = async (userId) => {
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/1/scheduled_activities`;
  return await fetch(url)
    .then(response => {
      if(!response.ok) {
        console.log(response)
        throw Error('Failed to retrieve user activities.')
      }
      return response.json()})
}