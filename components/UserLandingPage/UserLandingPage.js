import React from "react";
import mockData from "../../mockData/mockData";
import ActivityCard from "../ActivityCard/ActivityCard";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function UserLandingPage() {
  console.log(mockData);
  let userActivities = mockData.map(activity => {
    return (
          <ActivityCard
            date={ activity.date }
            location={ activity.location }
            activity={ activity.activity.name }
            forecast={ activity.forecast } />
  )})
  return (
    <ScrollView style={ styles.ScrollViewStyle }>
      <View style={ styles.userActivities }>
        { userActivities }
      </View>
    </ScrollView>
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
