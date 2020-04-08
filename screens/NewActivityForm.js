import React, { Component } from 'react';
import { Text, TextInput, View, Button, Alert, StyleSheet } from 'react-native';
import DatePicker from '../components/DatePicker';

import ActivityPicker from '../components/ActivityPicker';

export default class NewActivityForm extends Component {
  constructor() {
    super();
  }

  render() {
    
    return (
      <View style={ styles.container }>
        <Text style={ styles.label }>Activity:</Text>
        <ActivityPicker />
        <Text style={ styles.label }>Location:</Text>
        <TextInput       
          style={ styles.location }
          // onChangeText={text => onChangeText(text)}
          // value={value} 
        />
        <Text style={ styles.label }>Date:</Text>
        <DatePicker />
        <View style={ styles.createActivity }>
          <Button
            title="Create Activity"
            onPress={() => Alert.alert('Activity button pressed')}
          />
        </View>
      </View>
    )
  }
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
    textAlign: 'left',
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