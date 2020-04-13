import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ActivityCard({ date, location, activity, forecast, navigation }) {
  return (
    <View style={ styles.activityCard }>
      <Text style={ styles.header }>Scheduled Activity:</Text>
      <Text style={ styles.allActivityCardText }>
        <Text style={ styles.label } >Scheduled on: </Text>
        <Text>{ `${date}\n`}</Text>
        <Text style={ styles.label } >{ activity } at/in: </Text>
        <Text>{ `${location}\n`}</Text>
        <Text style={ styles.label } >Forecast: </Text>
        <Text>{ `${forecast}\n\n` }</Text>
      </Text>
      <Button
        title='View Activity'
        onPress={() => navigation.navigate('ActivityDetails')}
        color ='#000'>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  activityCard: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    height: 260,
    margin: 30,
    padding: 20,
    width: '86%',

  },

  allActivityCardText: {
    fontSize: 20
  },

  bottomOfCard: {
    marginBottom: 5000
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
