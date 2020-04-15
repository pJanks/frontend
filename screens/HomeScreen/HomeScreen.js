import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import UserWelcome from '../../components/UserWelcome/UserWelcome';
import UserLandingPage from '../../components/UserLandingPage/UserLandingPage';
import { fetchAllUserActivities } from '../../apiCalls/apiCalls';
import Loading from '../../components/Loading/Loading';

export default function HomeScreen({ navigation }) {
  const [activities, setActivities] = useState([]);
  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    if (!activities.length) {
      fetchAllUserActivities(1)
        .then(data => {
          setUserInfo({id: data.id, firstName: data.first_name, lastName: data.last_name})
          setActivities(data.scheduled_activities)
        })
    }
  })
  if (activities && userInfo) {
    return (
      <View>
        <UserWelcome userInfo={userInfo} />
        <View style={ styles.createActivityButton }>
          <Button
            buttonStyle={ styles.createActivityButton }
            title='Create New Activity'
            onPress={() => navigation.navigate('NewActivity', {userInfo})} />
        </View>
        <UserLandingPage activities={ activities } userInfo={userInfo} />
      </View>
    )
  } else {
    return <Loading />
  }
}

const styles = StyleSheet.create({
  createActivityButton: {
    margin: 20,
  },
  // activityHeader: {
  //   fontSize: 20
  // }
})
