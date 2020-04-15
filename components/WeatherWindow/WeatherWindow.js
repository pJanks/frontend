import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Skycons from 'react-skycons';

export default function WeatherWindow({ activity }) {
  const iconTranslation = {
    'clear-day': 'CLEAR_DAY',
    'clear-night': 'CLEAR_NIGHT',
    'rain': 'RAIN',
    'snow': 'SNOW',
    'sleet': 'SLEET',
    'wind': 'WIND',
    'fog': 'FOG',
    'cloudy': 'CLOUDY',
    'partly-cloudy-day': 'PARTLY_CLOUDY_DAY',
    'partly-cloudy-night': 'PARTLY_CLOUDY_NIGHT'
  }

  let icon = 'clear-day';
  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.tempContainer }>
        <Text style={ styles.highLow }>High: { activity.temp_hi }&deg;F Low: { activity.temp_low }&deg;F</Text>
        <Text style={ styles.mainTemp }>{ activity.temperature }&deg;F</Text>
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
