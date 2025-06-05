import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import TopStackContainer from '../topNavigation/TopStackContainer';
import AntDesign from 'react-native-vector-icons/AntDesign';
type DrawerParamList = {
  OneBottom: undefined;
  TwoBottom: {name: string};
};

const Settings = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={toggleDrawer} style={{padding: 20}}>
          <AntDesign name="menufold" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            flex: 1,
            paddingLeft: 20,
            alignSelf: 'center',
          }}>
          Dine's dash
        </Text>
      </View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
