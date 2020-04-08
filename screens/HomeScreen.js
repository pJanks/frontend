import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import UserWelcome from '../components/UserWelcome';
import WeatherWindow from '../components/WeatherWindow';

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
    </View>
  )
}

const styles = StyleSheet.create({
  createActivityButton: {
    margin: 20,
  }
})