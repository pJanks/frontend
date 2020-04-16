import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import UserWelcome from '../../components/UserWelcome/UserWelcome';
import UserLandingPage from '../../components/UserLandingPage/UserLandingPage';
import { fetchAllUserActivities } from '../../apiCalls/apiCalls';
import Loading from '../../components/Loading/Loading';

export default function HomeScreen({ navigation }) {
  const [activities, setActivities] = useState([]);
  const [userInfo, setUserInfo] = useState()
  const [viewPreviousActivities, setViewPreviousActivities] = useState(false)
  let today = new Date()
  let currentActivities = activities.filter(activity => new Date(activity.date) >= new Date().setDate(today.getDate() - 1))
  let previousActivities = activities.filter(activity => new Date(activity.date) < new Date().setDate(today.getDate() - 1))
  currentActivities.sort((a, b) => new Date(a.date) - new Date(b.date))
  previousActivities.sort((a, b) => new Date(b.date) - new Date(a.date))

  const updateUserActivities = () => {
    setActivities([])
  }

  useEffect(() => {
    if (!activities.length) {
      fetchAllUserActivities(1)
        .then(data => {
          setUserInfo({id: data.id, firstName: data.first_name, lastName: data.last_name})
          setActivities(data.scheduled_activities)
        })
    }
  })
  if (!activities || !userInfo) {
    return <Loading />
  } else if (activities && userInfo && viewPreviousActivities === false) {
    return (
      <View>
        <UserWelcome userInfo={userInfo} />
        <View style={ styles.createActivityButton }>
          <Button
            buttonStyle={ styles.createActivityButton }
            title='Create New Activity'
            onPress={() => navigation.navigate('NewActivity', {userInfo, updateUserActivities})} />
        </View>
        <View style={ styles.createActivityButton }>
          <Button
            color='#ed950e'
            buttonStyle={ styles.createActivityButton }
            title='View Previous Activities'
            onPress={() => setViewPreviousActivities(true)} />
        </View>
        <UserLandingPage 
          activities={ activities }
          currentActivities={ currentActivities } 
          previousActivities={ previousActivities }
          viewPreviousActivities={ viewPreviousActivities } 
          userInfo={userInfo} 
          navigation={navigation} 
          updateUserActivities={updateUserActivities} />
      </View>
    )
  } else {
    return (
      <View>
        <UserWelcome userInfo={userInfo} />
        <View style={ styles.createActivityButton }>
          <Button
            buttonStyle={ styles.createActivityButton }
            title='Create New Activity'
            onPress={() => navigation.navigate('NewActivity', {userInfo, updateUserActivities})} />
        </View>
        <View style={ styles.createActivityButton }>
          <Button
            color='#07407b' 
            buttonStyle={ styles.createActivityButton }
            title='View Current Activities'
            onPress={() => setViewPreviousActivities(false)} />
        </View>
        <UserLandingPage 
          activities={ activities }
          currentActivities={ currentActivities } 
          previousActivities={ previousActivities }
          viewPreviousActivities={ viewPreviousActivities } 
          userInfo={userInfo} 
          navigation={navigation} 
          updateUserActivities={updateUserActivities} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  createActivityButton: {
    margin: 15,
  }
})
