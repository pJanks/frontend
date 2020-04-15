import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewActivityForm from './screens/NewActivityForm/NewActivityForm';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ActivityDetails from './screens/ActivityDetails/ActivityDetails';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ActivityProvider from './provider/ActivityProvider';

const Stack = createStackNavigator();



export default function App() {
    return (
    <ActivityProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='NewActivity' component={NewActivityForm} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='ActivityDetails' component={ActivityDetails} />
          </Stack.Navigator>
        </NavigationContainer>
    </ActivityProvider>
    )
  }
