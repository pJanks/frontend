import React, { useState, useEffect } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import { View, StyleSheet, ScrollView } from "react-native";


export default function UserLandingPage({ activities, userInfo, navigation }) {
  return (
        <ScrollView
          style={ styles.ScrollViewStyle }
          contentContainerStyle={ styles.grow }>
          {activities.map(activity => {
            return (
            <ActivityCard
            date={ activity.date }
            location={ activity.location }
            activity={ activity.activity }
            forecast={ activity.forecast }
            activityId={ activity.id }
            userId={ userInfo.id }
            navigation={navigation}
            key={ activity.id }
            />
          )})}
        </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollViewStyle: {
    height: '78.75%',
    backgroundColor: '#b2e1f4',
  },
  grow: {
    flexGrow: 1,
    alignItems: 'center'
  }
});
