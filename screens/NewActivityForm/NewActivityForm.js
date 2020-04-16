import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Button, Picker, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { postNewActivity } from '../../apiCalls/apiCalls';
import Loading from '../../components/Loading/Loading';


export default function NewActivityForm({ navigation, route }) {
  const { userInfo, updateUserActivities } = route.params;
  const [activity, setActivity] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date(Date.now()));
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
            <Picker.Item label='Mountain Biking' value='Mountain Biking' />
            <Picker.Item label='Hiking' value='Hiking' />
            <Picker.Item label='Road Biking' value='Road Biking' />
            <Picker.Item label='Baseball' value='Baseball' />
            <Picker.Item label='Golf' value='Golf' />
            <Picker.Item label='Cricket' value='Cricket' />
            <Picker.Item label='Diving' value='Diving' />
            <Picker.Item label='Soccer' value='Soccer' />
            <Picker.Item label='Football' value='Football' />
            <Picker.Item label='Frisbee' value='Frisbee' />
            <Picker.Item label='Horseback Riding' value='Horseback Riding' />
            <Picker.Item label='Kayaking' value='Kayaking' />
            <Picker.Item label='Stand-up Paddle Boarding' value='Stand-up Paddle Boarding' />
            <Picker.Item label='Rafting' value='Rafting' />
            <Picker.Item label='Snowboarding' value='Snowboarding' />
            <Picker.Item label='Skiing' value='Skiing' />
            <Picker.Item label='Paragliding' value='Paragliding' />
            <Picker.Item label='Rock Climbing' value='Rock Climbing' />
            <Picker.Item label='Running' value='Running' />
          </Picker>
        </View>
        <Text style={ styles.label }>Location:</Text>
        <TextInput
          style={ styles.location }
          value={ location }
          onChangeText={(value) => setLocation(value)}
          placeholder='City, State or Landmark'
        />
        <Text style={ styles.label }>Date:</Text>
        <View style={ styles.createActivity }>
          <Button 
            color='#ed950e' 
            onPress={showDatepicker} 
            title="Select a Date" />
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
              let newActivity = ({id: userInfo.id, activity, location: location, date: formatDate})
              Promise.all([postNewActivity(newActivity)
                .then(resp => {
                  updateUserActivities()
                  navigation.navigate('Home')
                })
                ])
            }}
          />
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b2e1f4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15
  },
  location: {
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: 10,
    width: 250,
  },
  createActivity: {
    marginBottom: 30,
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
