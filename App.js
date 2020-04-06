import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NewActivityForm from './screens/NewActivityForm';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <NewActivityForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2b2b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
