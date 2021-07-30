import React from 'react'
import Feed from "../feed";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { primaryColor } from '../../Constants/Colors';

import Icon from 'react-native-vector-icons/Entypo';
import Iconn from 'react-native-vector-icons/FontAwesome5';
import Iconnn from 'react-native-vector-icons/MaterialIcons';

import Chat from '../Chat';
import Account from '../Account';

export const TabNav = () => {
      const Tab = createBottomTabNavigator();
      return (
            <Tab.Navigator
                  tabBarOptions={
                        {
                              activeTintColor: "#fff",
                              inactiveTintColor: "#111",
                              tabStyle: {
                                    backgroundColor: primaryColor
                              },
                              showLabel: false
                        }
                  } >
                  <Tab.Screen name="Home" component={Feed}
                        options={{

                              tabBarLabel: '',
                              tabBarIcon: ({ color, size }) => (
                                    <Icon color={color} size={30} name="home"></Icon>
                              ),
                        }} />
                  <Tab.Screen name="Settinsgs" component={Chat} options={{

                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                              <Iconn color={color} size={30} name="football-ball"></Iconn>
                        ),
                  }} />
                  <Tab.Screen name="Chat" component={Chat} options={{

                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                              <Iconnn color={color} size={30} name="chat-bubble-outline"></Iconnn>
                        ),
                  }} />
                  <Tab.Screen name="Account" component={Account} options={{

                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                              <Icon color={color} size={30} name="menu"></Icon>
                        ),
                  }} />
            </Tab.Navigator >)
}
