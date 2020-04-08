import React, { useState } from 'react';
import { Text, TextInput, View, Button, Alert, StyleSheet } from 'react-native';
import DatePicker from '../../components/DatePicker/DatePicker';

import ActivityPicker from '../../components/ActivityPicker/ActivityPicker';

export default function NewActivityForm() {
  const [activity, setActivity] = useState(0);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  return (
    <View style={ styles.container }>
      <Text style={ styles.label }>Activity:</Text>
      <ActivityPicker value={activity} onChange={(e) => setActivity(e.target.value)} />
      <Text style={ styles.label }>Location:</Text>
      <TextInput       
        style={ styles.location }
        value={ location }
        onChangeText={(e) => setLocation(e.target.value)}
      />
      <Text style={ styles.label }>Date:</Text>
      <DatePicker date={date} onChange={(e) => setDate(e.target.date)} />
      <View style={ styles.createActivity }>
        <Button
          title="Create Activity"
          onPress={() => Alert.alert('Activity button pressed')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    backgroundColor: '#fff',
    height: 40,
    width: 250,
  },
  createActivity: {
    margin: 20,
    width: 250,
  }
})