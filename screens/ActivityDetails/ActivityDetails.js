import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text, Button } from "react-native";
import ActivityContext from '../../context/ActivityContext';
import WeatherWindow from '../../components/WeatherWindow/WeatherWindow'
import { fetchScheduledActivity } from '../../apiCalls/apiCalls';

export default function ActivityDetails({ route, navigation }) {
  const [weatherCondition, setWeatherCondition] = useState('')
  const [activity, setActivity] = useState('')


  const { activityId, userId } = route.params
  console.log(userId, activityId)

  useEffect(() => {
    if (!activity) {
      fetchScheduledActivity(userId, activityId)
      .then(data => {
        setWeatherCondition(data.status)
        setActivity(data)
      })
    }
  })

  if(!activity) {
    return null
  } else if (weatherCondition === 'good') {
    return (
      <ScrollView
      contentContainerStyle={ styles.flex }
      style={styles.ScrollViewStyle}>
        <WeatherWindow activity={ activity }  />
        <View style={ styles.container }>
          { weatherCondition === 'good' && <Text style={ styles.mainText }>The weather looks great!!</Text> }
          <Text style={ styles.subText }>You Scheduled: { activity.activity.name }</Text>
          <Text style={ styles.subText }>on: { activity.date.split('T')[0] }</Text>
          <Text style={ styles.subText }>at/in: { activity.location }</Text>
          <Button
            title='In Case You Want To Stay In'
            onPress={() => setWeatherCondition('bad')}
          >
          </Button>
        </View>
      </ScrollView>
    )} else {
      let primaryMuscleExercises = activity.activity.primary_muscles.map(primaryMuscleGroup => {
        return (
          <View>
            <Text style={ styles.header }>Here are some exercises you can do from home to work out muscle groups associated with { activity.activity.name }:</Text>
            <Text style={ styles.labels }>Primary Muscle Group: {`${primaryMuscleGroup.name}\n`}</Text>
            <Text style={ styles.exerciseName }>{ `${primaryMuscleGroup.primary_exercises[0].name.split('-').join(' ').toUpperCase()}\n` }</Text>
            <Text style={ styles.labels }>Necessary Equipment: </Text><Text style={styles.descriptions}>{ `${primaryMuscleGroup.primary_exercises[0].equipment}\n` }</Text>
            <Text style={ styles.labels }>Exercise Description: </Text><Text style={styles.descriptions}>{ `${primaryMuscleGroup.primary_exercises[0].description}\n` }</Text>
            <Text style={ styles.labels }>Instructions: </Text><Text style={styles.descriptions}>{ `${primaryMuscleGroup.primary_exercises[0].instructions}\n` }</Text>
          </View>
        )
      })

      let secondaryMuscleExercises = activity.activity.secondary_muscles.map(secondaryMuscleGroup => {
        return (
          <View>
            <Text style={ styles.labels }>Secondary Muscle Group: {`${secondaryMuscleGroup.name}\n`}</Text>
            <Text style={ styles.exerciseName }>{ `${secondaryMuscleGroup.secondary_exercises[0].name.split('-').join(' ').toUpperCase()}\n` }</Text>
            <Text style={ styles.labels }>Necessary Equipment: </Text><Text style={styles.descriptions}>{`${secondaryMuscleGroup.secondary_exercises[0].equipment}\n` }</Text>
            <Text style={ styles.labels }>Exercise Description: </Text><Text style={styles.descriptions}>{ `${secondaryMuscleGroup.secondary_exercises[0].description}\n` }</Text>
            <Text style={ styles.labels }>Instructions: </Text><Text style={styles.descriptions}>{ `${secondaryMuscleGroup.secondary_exercises[0].instructions}\n` }</Text>
          </View>
        )
      })
      return (
        <ScrollView
        contentContainerStyle={ styles.flex }
        style={styles.ScrollViewStyle}>
        <WeatherWindow activity={ activity } />
          <View style={ styles.container }>
            { primaryMuscleExercises }
            { secondaryMuscleExercises }
            <Button
              title='         Hide          '
              onPress={() => setWeatherCondition('good')}
            >
            </Button>
          </View>
        </ScrollView>
      )
    }
  }

const styles = StyleSheet.create({
  header: {
    borderWidth: 3,
    fontSize: 17,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: '700'
  },

  mainText: {
    fontSize: 30,
    padding: 20,
    backgroundColor: '#b2e1f4',
    textAlign: 'center',
    fontWeight: '700'
  },

  exerciseName: {
    fontSize: 20,
    fontWeight: '700',
  },

  labels: {
    backgroundColor: '#b2e1f4',
    fontSize: 18,
    fontWeight: '700',
  },

  descriptions: {
    backgroundColor: '#b2e1f4',
    fontSize: 18,
  },

  subText: {
    backgroundColor: '#b2e1f4',
    fontSize: 18,
    padding: 15,
    fontWeight: '700',
    textAlign: 'center',
  },

  container: {
    padding: 20,
    backgroundColor: '#b2e1f4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  ScrollViewStyle: {
    height: '78.75%',
    backgroundColor: '#b2e1f4',
  },

  flex: {
    flexGrow: 1,
  }
});
