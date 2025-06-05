import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Acomponenet from './Acomponenet'
import Bcomponenet from './Bcomponenet'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator(); // Use capitalized name

const StackMainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='AScreen' component={Acomponenet} />
        <Stack.Screen name='BScreen' component={Bcomponenet} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackMainContainer

