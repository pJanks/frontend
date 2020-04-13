import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import UserWelcome from '../../components/UserWelcome/UserWelcome';
import UserLandingPage from '../../components/UserLandingPage/UserLandingPage';
import { fetchAllUserActivities } from '../../apiCalls/apiCalls';

export default function HomeScreen({ navigation }) {
  const [activities, setActivities] = useState([]);
  const [userId, setUserId] = useState(0)

  useEffect(() => {
    if (!activities.length) {
      fetchAllUserActivities(1)
        .then(data => {
          setUserId(data.id)
          setActivities(data.scheduled_activities)
        })
    }
  })

  return (
    <View>
      <UserWelcome />
      <View style={ styles.createActivityButton }>
        <Button
          buttonStyle={ styles.createActivityButton }
          title='Create New Activity'
          onPress={() => navigation.navigate('NewActivity')} />
      </View>
      <Text>Scheduled Activities:</Text>
      <UserLandingPage activities={ activities } userId={ userId } />
    </View>
  )
}

const styles = StyleSheet.create({
  createActivityButton: {
    margin: 20,
  }
})
