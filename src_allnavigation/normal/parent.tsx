import { View} from 'react-native';
import React from 'react';
import DrawerNavigator from '../drawerNavigator/DrawerContainer';

const Parent = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerNavigator />
    </View>
  );
};

export default Parent;

