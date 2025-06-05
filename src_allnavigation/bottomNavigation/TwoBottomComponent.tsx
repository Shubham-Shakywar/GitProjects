import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Filter from './component/filter'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {DrawerNavigationProp} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'

type DrawerParamList = {
  OneBottom: undefined;
  TwoBottom: {name: string};
};
const TwoBottomComponent = ({route}:any) => {
  const[customTop,setCustomTop]=useState(1)
    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
    const toggleDrawer = () => {
      navigation.toggleDrawer();
    };
  return (
    <View>
        <TouchableOpacity onPress={toggleDrawer} style={{padding: 20}}>
                <AntDesign name="menufold" size={24} color="black" />
              </TouchableOpacity>
     <Filter customTop={customTop}  setCustomTop={setCustomTop}/>
     
    </View>
  )
}

export default TwoBottomComponent

const styles = StyleSheet.create({})