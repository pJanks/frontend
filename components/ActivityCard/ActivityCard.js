import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { deleteActivity } from '../../apiCalls/apiCalls';

export default function ActivityCard({ date, location, activity, forecast, activityId, userId, updateUserActivities, navigation }) {
  const [deletedActivityId, setDeletedActivity] = useState(0)

  return (
    <View style={ styles.activityCard } key={ activityId }>
      <Text style={ styles.header }>{`${activity}`}</Text>
      <View style={ styles.textContainer }>
        <Text style={ styles.label } >Scheduled on: </Text>
        <Text style={ styles.content }>{ `${date.split('T')[0]}`}</Text>
      </View>
      <View style={ styles.textContainer }>
        <Text style={ styles.label } >{ activity } at/in: </Text>
        <Text style={ styles.content }>{ `${location}`}</Text>
      </View>
      <View style={ styles.textContainer }>
        <Text style={ styles.label } >Forecast: </Text>
        <Text style={ styles.content }>{ `${forecast}` }</Text>
      </View>
      <View style={ styles.buttonContainer}>
        <Button
          buttonStyle={ styles.buttonStyle }
          title='View Activity'
          onPress={() => {
            navigation.navigate('ActivityDetails', { activityId, userId })
          }}
          color= '#07407b' />
        <Button
          buttonStyle={ styles.buttonStyle }
          title='Delete Activity'
          onPress={() => {
            Promise.all([deleteActivity(activityId, userId)
              ])
              .then(response => {
                setDeletedActivity(activityId)
              })
              updateUserActivities()
            }
          }
          color= '#07407b' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 5,
  },

  activityCard: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: "#07407b",
    borderRadius: 25,
    margin: 10,
    padding: 20,
    width: '85%',
  },
  textContainer: {
    flexDirection: 'row',
    margin: 2,
  },
  header: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  content: {
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 15
  }
});
