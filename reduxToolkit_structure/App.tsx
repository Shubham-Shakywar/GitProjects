import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack_Navigator from './navigation'
import { Provider } from 'react-redux'
import {  store } from './redux_toolkit/store'

import BootSplash from 'react-native-bootsplash';

const App = () => {
   useEffect(() => {
      const init = async () => {
        // …do multiple sync or async tasks
      };
  
      init().finally(async () => {
        await BootSplash.hide({fade: true});
        console.log('BootSplash has been hidden successfully');
      });
    }, []);
  
  return (
    <Provider store={store}>
  <NavigationContainer>
    <Stack_Navigator/>
  </NavigationContainer>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})