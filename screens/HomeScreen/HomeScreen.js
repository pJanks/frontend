import * as React from 'react';

import { View, Button, StyleSheet } from 'react-native';
import UserWelcome from '../../components/UserWelcome/UserWelcome';
import WeatherWindow from '../../components/WeatherWindow/WeatherWindow';
import UserLandingPage from '../../components/UserLandingPage/UserLandingPage';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <UserWelcome />
      <WeatherWindow />
      <View style={ styles.createActivityButton }>
        <Button
          buttonStyle={ styles.createActivityButton }
          title='Create New Activity'
          onPress={() => navigation.navigate('New Activity')} />
      </View>
      <Text>userActivities</Text>
      <UserLandingPage />
    </View>
  )
}

const styles = StyleSheet.create({
  createActivityButton: {
    margin: 20,
  }
})
