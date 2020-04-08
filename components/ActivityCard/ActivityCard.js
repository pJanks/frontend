import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ActivityCard({ date }) {
  console.log(date);
  return (
    <View>
      <Text>{date}</Text>
      <Text>hi</Text>
    </View>
  );
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
