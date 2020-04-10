import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ActivityCard({ date, location, activity, forecast }) {
  return (
    <View style={ styles.activityCard }>
      <Text style={ styles.header }>Scheduled Activity:</Text>
      <Text style={ styles.allActivityCardText }>
        <Text style={ styles.label } >Scheduled on: </Text>
        <Text>{ `${date}\n`}</Text>
        <Text style={ styles.label } >{ activity } at/in: </Text>
        <Text>{ `${location}\n`}</Text>
        <Text style={ styles.label } >Forecast: </Text>
        <Text>{ `${forecast}`}</Text>
      </Text>
      <Button style={ styles.buttonStyles } title='View Activity'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  activityCard: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 4,
    height: 195,
    margin: 25,
    padding: 15,
    width: '86%',

  },

  allActivityCardText: {
    fontSize: 20
  },

  buttonStyles: {
  },

  header: {
    fontSize: 25,
    marginBottom: 10,
    paddingHorizontal: '7%',
    textDecorationLine: 'underline'
  },

  label: {
    fontWeight: 'bold'
  }
});
