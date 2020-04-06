import React, { Component } from 'react';
import { Text, TextInput, View, Picker, Button, Alert } from 'react-native';
import DatePicker from '../components/DatePicker';

import ActivityPicker from '../components/ActivityPicker';

export default class NewActivityForm extends Component {
  constructor() {
    super();
  }

  render() {
    

    return (
      <View>
        <Text>Activity:</Text>
        <ActivityPicker />
        <Text>Location:</Text>
        <TextInput       
          style={{ height: 40, backgroundColor: '#fff' }}
          // onChangeText={text => onChangeText(text)}
          // value={value} 
        />
        <Text>Date:</Text>
        <DatePicker />
        <Button
          title="Create Activity"
          onPress={() => Alert.alert('Activity button pressed')}
        />
      </View>
    )
  }
}