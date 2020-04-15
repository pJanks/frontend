import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function UserWelcome(userInfo) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + '/' + mm + '/' + dd;
  return (
    <View style={ styles.container }>
      <Text style={ styles.welcome }>Welcome, {`${userInfo.userInfo.firstName} ${userInfo.userInfo.lastName}`}!</Text>
      <Text style={ styles.date }>Today's date is {today}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFBD58',
    padding: 10,
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
  },
  date: {
    fontSize: 16,
    textAlign: 'center',
  }
})
