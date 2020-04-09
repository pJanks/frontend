import React from "react";
import mockData from "../../mockData/mockData";
import ActivityCard from "../ActivityCard/ActivityCard";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function UserLandingPage() {
  console.log(mockData);
  let userActivities = mockData.map(activity => {
    return (
      <View>
        <ScrollView>
          <ActivityCard
            date={ activity.date }
            location={ activity.location }
            activity={ activity.activity.name }
            forecast={ activity.forecast } />
        </ScrollView>
      </View>
  )})
  return (
    <View>
      { userActivities }
    </View>
  )
}

// const styles = StyleSheet.create({
//   picker: {
//     height: 40,
//     width: 250,
//     borderColor: 'gray',
//     borderWidth: 1,
//     backgroundColor: '#fff',
//   }
// });
