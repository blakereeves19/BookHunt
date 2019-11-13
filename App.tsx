import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HuntScreen from './src/client/Hunt';
import ReadScreen from './src/client/Read';
import ToReadScreen from './src/client/ToRead';

interface Props {}

const TabNavigator = createBottomTabNavigator({
  ToRead: {
    screen: ToReadScreen,
    navigationOptions: {
      title: 'To Read',
    },
  },
  Hunt: HuntScreen,
  Read: ReadScreen,
});

export default createAppContainer(TabNavigator);
