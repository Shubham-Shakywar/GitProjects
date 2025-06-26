import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserScreen from '../screens/userScreen';
import AdminScreen from '../screens/adminScreen';
import MainScreen from '../screens/mainScreen';

const Stack_Navigator = () => {
    const Stack=createStackNavigator();

  return (
   <Stack.Navigator initialRouteName='MainScreen'>
    <Stack.Screen name='MainScreen'component={MainScreen}/>
    <Stack.Screen name='UserScreen' component={UserScreen} />
    <Stack.Screen name='AdminScreen' component={AdminScreen}/>
   </Stack.Navigator>
  )
}

export default Stack_Navigator

const styles = StyleSheet.create({})