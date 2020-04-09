import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ActivityCard({ date, location, activity, forecast }) {
  return (
    <View>
      <Text style={ styles.header }>Activity:</Text>
      <Text>Scheduled on: {date}</Text>
      <Text>{ activity } at: { location }</Text>
      <Text>Forecast: { forecast }</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  activityCard: {
    height: 80,
    margin: 5,
    padding: 5,
    width: 260,

  },

  header: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
  }
});
