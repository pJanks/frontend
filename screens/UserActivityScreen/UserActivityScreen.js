import React from 'react';
import { Text, View } from 'react-native';

export default function UserActivityScreen({ route, navigation }) {
  const {activity, location, formatDate} = route.params;
  return (
    <View>
      <Text>{activity}</Text>
      <Text>{location}</Text>
      <Text>{formatDate}</Text>
    </View>
  )
}