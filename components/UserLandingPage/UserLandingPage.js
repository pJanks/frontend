import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import Loading from "../Loading/Loading";
import { StyleSheet, ScrollView } from "react-native";

export default function UserLandingPage({ activities, currentActivities, previousActivities, viewPreviousActivities, userInfo, updateUserActivities, navigation }) {


  if (!activities.length) {
    return <Loading />
  } else if (viewPreviousActivities === false) {
    return (
      <ScrollView
      style={ styles.ScrollViewStyle }
      contentContainerStyle={ styles.grow }>
      {currentActivities.map(activity => {
        return (
          <ActivityCard
          date={ activity.date }
          location={ activity.location }
          activity={ activity.activity }
          forecast={ activity.forecast }
          activityId={ activity.id }
          userId={ userInfo.id }
          updateUserActivities={updateUserActivities}
          navigation={navigation}
          key={ activity.id }
          />
        )})}
      </ScrollView>
    )
  } else {
    return (
      <ScrollView
        style={ styles.ScrollViewStyle }
        contentContainerStyle={ styles.grow }>
        {previousActivities.map(activity => {
          return (
            <ActivityCard
            date={ activity.date }
            location={ activity.location }
            activity={ activity.activity }
            forecast={ activity.forecast }
            activityId={ activity.id }
            userId={ userInfo.id }
            updateUserActivities={updateUserActivities}
            navigation={navigation}
            key={ activity.id }
            />
          )})}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  ScrollViewStyle: {
    height: '68%',
    backgroundColor: '#b2e1f4',
  },
  grow: {
    flexGrow: 1,
    alignItems: 'center'
  }
});
