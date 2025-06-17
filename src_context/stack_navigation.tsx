import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Acomponent from './Acomponent';
import Bcomponent from './Bcomponent';
import {useNavigation} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import ThemeProvider from './darkTheme';
// Correct destructuring of Navigator and Screen
const Stack = createStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
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
  <ThemeProvider>
      <Stack.Navigator initialRouteName="Acomponent">
      <Stack.Screen name="Acomponent" component={Acomponent} />
      <Stack.Screen name="Bcomponent" component={Bcomponent} />
    </Stack.Navigator>
  </ThemeProvider>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
