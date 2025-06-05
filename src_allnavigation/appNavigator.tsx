import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './normal/splash';
import Parent from './normal/parent';

const AppNavigator = () => {
  const Stack=createStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='splash' component={Splash} options={{headerShown:true}}/>
      <Stack.Screen name='parent' component={Parent} options={{headerShown:false}}  />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator

