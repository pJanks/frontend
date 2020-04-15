import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Button, Picker, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { postNewActivity, fetchActivityList } from '../../apiCalls/apiCalls';
import Loading from '../../components/Loading/Loading';


export default function NewActivityForm({ navigation, route }) {
  const { userInfo } = route.params;
  const [activity, setActivity] = useState('');
  const [location, setLocation] = useState('');
  const [activityList, setActivityList] = useState();
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

  useEffect(() => {
    if (!activityList) {
      fetchActivityList()
        .then(data => setActivityList(data))
    }
  })

  if(!activityList) {
    return <Loading />
  } else {
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
            { activityList.map(activity => (
              <Picker.Item label={activity.name} value={activity.value} />
            ))}
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
              let newActivity = ({id: userInfo.id, activity, location: location, date: formatDate})
              Promise.all([postNewActivity(newActivity)
                .then(resp => navigation.navigate('ActivityDetails', resp.id))])
            }}
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