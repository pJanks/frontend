import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default function ActivityPicker() {
  const [selectedValue, setSelectedValue] = useState("Select an activity...");
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={ styles.picker }
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.item label='Select an activity...' value={0} />
        <Picker.item label='Hiking' value={1} />
        <Picker.item label='Climbing' value={2} />
        <Picker.item label='Biking' value={3} />
        <Picker.item label='Running' value={4} />
        <Picker.item label='Kayaking' value={5} />
        <Picker.item label='Skiing' value={6} />
        <Picker.item label='Snowboarding' value={7} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
  }
});
