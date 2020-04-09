import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ActivityCard({ date, location, activity, forecast }) {
  return (
    <View style={ styles.activityCard }>
      <Text>Activity:</Text>
      <Text>Scheduled on: {date}</Text>
      <Text>{ activity } at/in: { location }</Text>
      <Text>Forecast: { forecast }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityCard: {
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 6,
    height: 150,
    margin: 25,
    padding: 15,
    width: 260,

  },

  header: {
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
  }
});
