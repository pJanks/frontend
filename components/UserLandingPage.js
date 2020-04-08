import React from "react";
import mockData from "../mockData/mockData";
import ActivityCard from "./ActivityCard";
import { View, StyleSheet, Text } from "react-native";

export default function UserLandingPage() {
  console.log(mockData);
  let userActivities = mockData.map(activity => {
    return <ActivityCard date={ activity.date } />
  })
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
