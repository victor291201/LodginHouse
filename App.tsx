/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import Login from './src/views/Login';
import Register from './src/views/Register';
import Home from './src/views/Home';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './src/views/Search';
import Add from './src/views/Add';
import Save from './src/views/Save';
import ProfileUser from './src/views/Profile';
import Profile from './src/views/Profile2';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from './src/utilities/GlobalStyles';
import Messages from './src/views/Messages';
import Chat from './src/views/Chat';
import Lodgin from './src/views/Lodgin';
import HomeScreen from './src/views/HomeScreen';

const Stack = createStackNavigator(); 

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const [loged,setLoged]=useState(true);
  const {bg1,bg2,bg5,bg3,} = GlobalStyles;
  if(!loged){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }else{
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="messages" component={Messages} />
          <Stack.Screen name="chat" component={Chat} />
          <Stack.Screen name="lodgin" component={Lodgin} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
