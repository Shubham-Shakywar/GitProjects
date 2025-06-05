// MainDrawer.js
import React from 'react';
import { View, Text } from 'react-native';
import BottomStackConatiner from '../bottomNavigation/BottomStackConatiner';

const HomeComponent = () => {
  return (
    <View style={{flex:1}}>
    <BottomStackConatiner/>
    </View>
  );
};

export default HomeComponent;
