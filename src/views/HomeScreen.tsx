/* eslint-disable prettier/prettier */
/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Home from './Home';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './Search';
import Add from './Add';
import Save from './Save';
import ProfileUser from './Profile';
import Profile from './Profile2';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../utilities/GlobalStyles';
import Messages from './Messages';
import Chat from './Chat';
import Lodgin from './Lodgin';

const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();

function HomeScreen(): React.JSX.Element {
    const {bg1,bg2,bg5,bg3,} = GlobalStyles;
    return(
        <Tab.Navigator  initialRouteName="home"
            screenOptions={({ route }) => ({
              headerShown:false,
              tabBarShowLabel:false,
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'home') {
                  if(focused==true){
                    return <Icon name="home" size={30} color={bg1.backgroundColor} />;
                  }else{
                    return <Icon name="home" size={30} color={"gray"} />;
                  }
                } else if (route.name === 'search') {
                  if(focused==true){
                    return <Icon name="search" size={30} color={bg1.backgroundColor} />;
                  }else{
                    return <Icon name="search" size={30} color={"gray"} />;
                  }
                } else if (route.name === 'add') {
                  if(focused==true){
                    return <Icon name="add-circle-outline" size={30} color={bg1.backgroundColor} />;
                  }else{
                    return <Icon name="add-circle-outline" size={30} color={"gray"} />;
                  }
                } else if (route.name === 'save') {
                  if(focused==true){
                    return <Icon name="bookmark" size={30} color={bg1.backgroundColor} />;
                  }else{
                    return <Icon name="bookmark" size={30} color={"gray"} />;
                  }
                } else if (route.name === 'profile') {
                  if(focused==true){
                    return <Icon name="person" size={30} color={bg1.backgroundColor} />;
                  }else{
                    return <Icon name="person" size={30} color={"gray"} />;
                  }
                }
              },
              tabBarActiveTintColor: bg1.backgroundColor,
              tabBarInactiveTintColor: 'gray',
            })}
            >
              <Tab.Screen name="home" component={Home} />
              <Tab.Screen name="search" component={Search} />
              <Tab.Screen name="add" component={Add} />
              <Tab.Screen name="save" component={Save} />
              <Tab.Screen name="profile" component={ProfileUser} />
            </Tab.Navigator>
            

          
    )
  }


export default HomeScreen;
