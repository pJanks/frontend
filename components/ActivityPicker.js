import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default function ActivityPicker() {
  const [selectedValue, setSelectedValue] = useState("Select an activity...");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 220, borderColor: 'gray', borderWidth: 1, backgroundColor: '#fff' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
  container: {
    
  }
});
