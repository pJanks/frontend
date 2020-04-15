import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#07407b" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b2e1f4',
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  }
});
