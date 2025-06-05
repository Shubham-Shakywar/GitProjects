import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import OneBottomComponent from './OneBottomComponent';
import TwoBottomComponent from './TwoBottomComponent';

const BottomStackConatiner = () => {
    const TabStack=createBottomTabNavigator();
  return (
  // <NavigationContainer>
   
        <TabStack.Navigator>
            <TabStack.Screen name='OneBottom' component={OneBottomComponent} options={{headerShown:false}}/>
            <TabStack.Screen name='TwoBottom' component={TwoBottomComponent} options={{headerShown:false}}/>
        </TabStack.Navigator>

  // </NavigationContainer>
  )
}

export default BottomStackConatiner

const styles = StyleSheet.create({})