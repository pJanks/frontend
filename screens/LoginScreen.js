import * as React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.label }>Username:</Text>
      <TextInput style={ styles.textInput } />
      <Text style={ styles.label }>Password:</Text>
      <TextInput style={ styles.textInput } />
      <View style={ styles.loginButton }>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Home')} />
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
    textAlign: 'left',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 40,
    width: 250,
  },
  loginButton: {
    margin: 20,
    width: 250,
  }
})