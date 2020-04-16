import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function WeatherWindow({ activity }) {
  const iconDictionary = {
    'clear-day': require('../../assets/clear-day.png'),
    'clear-night': require('../../assets/clear-night.png'),
    'cloudy': require('../../assets/cloudy.png'),
    'fog': require('../../assets/fog.png'),
    'partly-cloudy-day': require('../../assets/partly-cloudy-day.png'),
    'partly-cloudy-night': require('../../assets/partly-cloudy-night.png'),
    'rain': require('../../assets/rain.png'),
    'sleet': require('../../assets/sleet.png'),
    'snow': require('../../assets/snow.png'),
    'wind': require('../../assets/wind.png')
  }

  const icon = iconDictionary[activity.forecast_img];

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.tempContainer }>
        <Text style={ styles.highLow }>High: { activity.temp_hi }&deg;F Low: { activity.temp_low }&deg;F</Text>
        <Text style={ styles.mainTemp }>{ activity.temperature }&deg;F</Text>
      </View>
      <View>
        <Image 
          style={ styles.forecastImg }
          source={icon} />
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
  },
  forecastImg: {
    padding: 15,
    width: 100,
    height: 100
  }
})
