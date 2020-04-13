import React from "react";
import { View, StyleSheet, ScrollView, Text, Button } from "react-native";
import ActivityContext from '../../context/ActivityContext';

export default function ActivityDetails({ route, navigation }) {
  const badWeatherTerms = []
  const { activityId, userId } = route.params
  return (
    <ActivityContext.Consumer>
      {context => {
        if (context.goodWeather) {
          return (
            <ScrollView>
              <View>
                <Text>You have scheduled: { `${context.mockData[0].activity.name}\n` }</Text>
                <Text>on: { `${context.mockData[0].date}\n` }</Text>
                <Text>in: { `${context.mockData[0].location}\n` }</Text>
                <Text>The Weather looks great: { `${context.mockData[0].forecast}\n\n\n` }</Text>
                <Button
                  title='In Case You Wanted To Stay In . . .'>
                </Button>
              </View>
            </ScrollView>
//activity:
//             id: 1
// muscle_groups: Array(2)
// 0: {id: 1, name: "Biceps", exercise_set: Array(1)}
// 1: {id: 2, name: "Forearms", exercise_set: Array(2)}
// length: 2
// __proto__: Array(0)
// name: "Hiking"
// __proto__: Object
// created_at: "2020-04-06T03:23:26.122544Z"
// date: "2020-04-06"
// forecast: "Overcast"
// forecast_img: "cloudy"
// id: 1
// location: "Denver, CO"
// updated_at: "2020-04-06T03:23:26.122555Z"
// user:
// first_name: "user"
// id: 1
// last_name: "name"
// __proto__: Object
// __proto__: Object
          )} else {
          return (
            <ScrollView>
              <View>
                <Text>hi</Text>
              </View>
            </ScrollView>
          )
        }
      }
    }
    </ActivityContext.Consumer>
  )
}

const styles = StyleSheet.create({
  something: {

  },
});
