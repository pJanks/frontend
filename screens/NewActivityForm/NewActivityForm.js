import React, { useState } from 'react';
import { Text, TextInput, View, Button, Picker, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function NewActivityForm({ navigation }) {
  const [activity, setActivity] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date(1586051730000));
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const getCurrentDate = (date) => {
    let year = date.getFullYear();
    let month, day;
    if ((date.getMonth() + 1) < 10) {
      month = `0${date.getMonth() + 1}`
    } else {
      month = date.getMonth() + 1
    }
    if (date.getDate() < 10) {
      day = `0${date.getDate()}`
    } else {
      day = date.getDate();
    }
    this.date = year + "-" + month + "-" + day;
    return year + "-" + month + "-" + day;
  }

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={ styles.container }>
      <Text style={ styles.label }>Activity:</Text>
      <View>
        <Picker
          selectedValue={activity}
          style={ styles.picker }
          onValueChange={(itemValue) => setActivity(itemValue)}
        >
          <Picker.Item label='Select an activity...' value={0} />
          <Picker.Item label='Hiking' value={1} />
          <Picker.Item label='Climbing' value={2} />
          <Picker.Item label='Biking' value={3} />
          <Picker.Item label='Running' value={4} />
          <Picker.Item label='Kayaking' value={5} />
          <Picker.Item label='Skiing' value={6} />
          <Picker.Item label='Snowboarding' value={7} />
        </Picker>
      </View>
      <Text style={ styles.label }>Location:</Text>
      <TextInput       
        style={ styles.location }
        value={ location }
        onChangeText={(value) => setLocation(value)}
      />
      <Text style={ styles.label }>Date:</Text>
      <View>
        <Button color='green' onPress={showDatepicker} title="Select a Date" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
      <View style={ styles.createActivity }>
        <Button
          title="Create Activity"
          onPress={() => {
            let formatDate = getCurrentDate(date)
            //Date not currently passing. Will be sent to an API call instead and this is just testing
            navigation.navigate('UserActivityScreen', {activity, location, formatDate})}}
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
  },
  picker: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
  }
})