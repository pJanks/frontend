import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import UserWelcome from '../components/UserWelcome';
import WeatherWindow from '../components/WeatherWindow';
import UserLandingPage from '../components/UserLandingPage';

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
