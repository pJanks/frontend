import * as React from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <View style={ styles.logoContainer }>
      <Image 
          style={ styles.logoTitle }
          source={require('../../assets/RainorShineTitle.png')}/>
      <Image 
        style={ styles.logo }
        source={require('../../assets/RainorShineLogo.png')}/>
      </View>
      <View style={ styles.login }>
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
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250
  },
  logoTitle: {
    width: 300,
    height: 100,
    marginTop: 50
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