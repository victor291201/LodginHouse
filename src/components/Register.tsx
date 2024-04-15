/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Register = () => {
    return (
        <View>
            <Header title="Welcome to React Native"/>
            <Text>Step One</Text>
            <Text>
                Edit App.js to change this screen and turn it
                into your app.
            </Text>
            <Text>See Your Changes</Text>
            <Text>
                Press Cmd + R inside the simulator to reload
                your app’s code.
            </Text>
            <Text>Debug</Text>
            <Text>
                Press Cmd + M or Shake your device to open the
                React Native Debug Menu.
            </Text>
            <Text>Learn</Text>
            <Text>
                Read the docs to discover what to do next:
            </Text>
        </View> 
    )
  
}
export default Register;