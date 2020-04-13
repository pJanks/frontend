import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ActivityContext from '../../context/ActivityContext';

export default function ActivityDetails({ navigation }) {
  return (
    <ActivityContext.Consumer>
      {context => {
        console.log(context)
        if (context.goodWeather) {
          return (
            <ScrollView>
              <View>
                <Text>hello</Text>
              </View>
            </ScrollView>
          )}}
        }
    </ActivityContext.Consumer>
  )
}

const styles = StyleSheet.create({
  something: {

  },
});
