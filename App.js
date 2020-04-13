import React, { useState, Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityContext } from './context/UserContext';
import { mockData } from './mockData/mockData';
import NewActivityForm from './screens/NewActivityForm/NewActivityForm';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import UserActivityScreen from './screens/UserActivityScreen/UserActivityScreen';
import ActivityProvider from './provider/ActivityProvider';

const Stack = createStackNavigator();



export default function App() {
    return (
    <ActivityProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='NewActivity' component={NewActivityForm} />
            <Stack.Screen name='UserActivityScreen' component={UserActivityScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </ActivityProvider>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2b2b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
