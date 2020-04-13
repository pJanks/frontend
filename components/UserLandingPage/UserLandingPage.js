import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import { View, StyleSheet, ScrollView } from "react-native";
import ActivityContext from '../../context/ActivityContext';

export default function UserLandingPage({ navigation }) {
  return (
    <ActivityContext.Consumer>
      {context => {
        return (
        <ScrollView style={ styles.ScrollViewStyle }>
          <View style={ styles.userActivities }>
            {context.mockData.map(activity => (
              <ActivityCard
              date={ activity.date }
              location={ activity.location }
              activity={ activity.activity.name }
              forecast={ activity.forecast }
              navigation={ navigation }
              />
            ))}
          </View>
        </ScrollView>
      )}}
    </ActivityContext.Consumer>
  )
}

const styles = StyleSheet.create({
  userActivities: {
    //need logic to dynamically style height based on how many cards exist in the
    //users array, of figure out a different way to implement scroll so that we
    //aren't using a fixed
    borderWidth: 1,
    paddingBottom: 320

  }, ScrollViewStyle: {
    //need logic to dynamically style height based on how many cards exist in the
    //users array, of figure out a different way to implement scroll so that we
    //aren't using a fixed
    height: '100%',
    borderWidth: 2,
  }
});
