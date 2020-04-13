import React, { useState, useEffect } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import { View, StyleSheet, ScrollView } from "react-native";


export default function UserLandingPage({ activities, userId }) {
  console.log('here: ', userId);
  return (
    <ScrollView style={ styles.ScrollViewStyle }>
      <View style={ styles.userActivities }>
        {activities.map(activity => {
          return (
          <ActivityCard
          date={ activity.date }
          location={ activity.location }
          activity={ activity.activity.name }
          forecast={ activity.forecast }
          activityId={ activity.id }
          />
        )})}
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
