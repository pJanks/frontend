export const fetchAllUserActivities = async (userId) => {
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/users/${userId}/scheduled_activities`;
  return await fetch(url)
    .then(response => {
      if(!response.ok) {
        console.log(response)
        throw Error('Failed to retrieve user activities.')
      }
      return response.json()})
}

export const postNewActivity = async ({id, activity, location, date}) => {
  console.log({id, activity, location, date})
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/users/${id}/scheduled_activities`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      activity_id: activity,
      location: location,
      date: date
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return await fetch(url, options)
        .then(res => {
          if(!res.ok) {
            throw Error('Failed post new activity.')
          }
          return res.json()
        })
}

export const fetchScheduledActivity = async (activityId, userId) => {
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/users/${userId}/scheduled_activities/${activityId}`;
  return await fetch(url)
    .then(response => {
      if(!response.ok) {
        console.log(response)
        throw Error('Failed to retrieve user activities.')
      }
      return response.json()})
}
<<<<<<< HEAD
=======

export const fetchActivityList = async () => {
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/activities`;
  return await fetch(url)
    .then(response => {
      if(!response.ok) {
        console.log(response)
        throw Error('Failed to retrieve user activities.')
      }
      return response.json()})
}

>>>>>>> Add activity list fetch for form dropdown
