import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import UserWelcome from '../../components/UserWelcome/UserWelcome';
import UserLandingPage from '../../components/UserLandingPage/UserLandingPage';
import { fetchAllUserActivities } from '../../apiCalls/apiCalls';

export default function HomeScreen({ navigation }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    Promise.all([fetchAllUserActivities(1)
      .then(data => setActivities(data.scheduled_activities))])
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
      <UserLandingPage activities={activities} />
    </View>
  )
}

const styles = StyleSheet.create({
  createActivityButton: {
    margin: 20,
  }
})
