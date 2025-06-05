import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FirstTop from './FirstTop';
import SecondTop from './SecondTop';

const TopStackContainer = () => {
  const TopStack = createMaterialTopTabNavigator();
  return (
    <TopStack.Navigator>
      <TopStack.Screen name="FirstTop" component={FirstTop} />
      <TopStack.Screen name="SecondTop" component={SecondTop} />
    </TopStack.Navigator>
  );
};

export default TopStackContainer;

const styles = StyleSheet.create({});
