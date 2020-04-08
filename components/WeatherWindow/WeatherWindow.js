import * as React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function WeatherWindow() {
  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.tempContainer }>
        <Text style={ styles.highLow }>High: 73° Low: 45°</Text>
        <Text style={ styles.mainTemp }>65°</Text>
      </View>
      <View>
        <Text>[Weather Icon]</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'lightyellow',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tempContainer: {
    flexDirection: 'column',
  },
  mainTemp: {
    fontSize: 64,
  },
  highLow: {
    fontSize: 12,
  }
})