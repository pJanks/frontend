export const fetchAllUserActivities = async (userId) => {
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/users/${userId}/scheduled_activities`;
  return await fetch(url)
    .then(response => {
      if(!response.ok) {
        throw Error('Failed to retrieve user activities.')
      }
      return response.json()})
}

export const postNewActivity = async ({id, activity, location, date}) => {
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/users/${id}/scheduled_activities/new`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      activity_name: activity,
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

export const fetchScheduledActivity = async (userId, activityId) => {
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/users/${userId}/scheduled_activities/${activityId}`;
  return await fetch(url)
    .then(response => {
      if(!response.ok) {
        throw Error('Failed to retrieve user activities.')
      }
      return response.json()})
}

export const deleteActivity = async (activityId, userId) => {
  const url = `https://rain-or-shine-backend.herokuapp.com/api/v1/users/${userId}/scheduled_activities/${activityId}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return await fetch(url, options)
    .then(response => {
      if(!response.ok) {
        throw Error('Failed to delete')
      }
      return response.json()})
}
