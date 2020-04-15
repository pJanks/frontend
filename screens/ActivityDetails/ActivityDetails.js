import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text, Button } from "react-native";
import ActivityContext from '../../context/ActivityContext';
import { fetchSingleActivityData } from '../../apiCalls/apiCalls';

export default function ActivityDetails({ route, navigation }) {
  const [weatherCondition, setWeatherCondition] = useState('')
  const [activity, setActivity] = useState('')
  let goodWeather = true;


  const { activityId, userId } = route.params

  useEffect(() => {
    if (!activity) {
      fetchSingleActivityData(activityId, userId)
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
      <ScrollView>
        <View>
          <Text>The weather looks great!!</Text>

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
            <Text>Primary Muscle Group:{` ${primaryMuscleGroup.name}\n\n`}</Text>
            <Text>{ `${primaryMuscleGroup.primary_exercises[0].name}\n\n` }</Text>
            <Text>{ `Necessary Equipment: ${primaryMuscleGroup.primary_exercises[0].equipment}\n\n` }</Text>
            <Text>{ `Exercise Description: ${primaryMuscleGroup.primary_exercises[0].description}\n\n` }</Text>
            <Text>{ `Instructions: ${primaryMuscleGroup.primary_exercises[0].instructions}\n\n` }</Text>
          </View>
        )
      })

      let secondaryMuscleExercises = activity.activity.secondary_muscles.map(secondaryMuscleGroup => {
        return (
          <View>
            <Text>Secondary Muscle Group:{` ${secondaryMuscleGroup.name}\n\n`}</Text>
            <Text>{ `${secondaryMuscleGroup.secondary_exercises[0].name}\n\n` }</Text>
            <Text>{ `Necessary Equipment: ${secondaryMuscleGroup.secondary_exercises[0].equipment}\n\n` }</Text>
            <Text>{ `Exercise Description: ${secondaryMuscleGroup.secondary_exercises[0].description}\n\n` }</Text>
            <Text>{ `Instructions: ${secondaryMuscleGroup.secondary_exercises[0].instructions}\n\n` }</Text>
          </View>
        )
      })
      return (
        <ScrollView>
          <View>
          { primaryMuscleExercises }
          { secondaryMuscleExercises }
          <Button
          title='Hide'
          onPress={() => setWeatherCondition('good')}
          >
              </Button>
          </View>
        </ScrollView>
      )
    }
  }

const styles = StyleSheet.create({
  something: {

  },
});
