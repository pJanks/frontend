import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Skycons from 'react-skycons';

export default function WeatherWindow() {
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
        <Text style={ styles.highLow }>High: 73° Low: 45°</Text>
        <Text style={ styles.mainTemp }>65°</Text>
      </View>
      <View>
        <Skycons
          color='black'
          icon={iconTranslation[icon]}
          autoplay={true} />
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