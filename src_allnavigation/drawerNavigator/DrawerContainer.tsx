// simple drwaer 

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import ProfileComponener from './mainDrawer';
// import Settings from './Settings';


// const DrawerNavigator = () => {
//   const Drawer=createDrawerNavigator();
//   return (
//    <Drawer.Navigator>
//     <Drawer.Screen name='mainDrawer'component={ProfileComponener} options={{headerShown:false}}/>
//     <Drawer.Screen name='setting' component={Settings}/>
//    </Drawer.Navigator>
//   )
// }

// export default DrawerNavigator

// const styles = StyleSheet.create({})


import {  Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import ProfileComponent from './home';
import Settings from './Settings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeComponent from './home';


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
 
  return (
    <View style={{ flex: 1 }}>
      {/* Close Icon */}
      <TouchableOpacity
      onPress={() => props.navigation.closeDrawer()}
        style={{ alignSelf: 'flex-end', padding: 15 }}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      {/* Default Drawer Items */}
      <DrawerItemList {...props} />
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeComponent}
        options={{ headerShown: false, title: 'Home' }} // Optional: title for display
      />
      <Drawer.Screen
        name="setting"
        component={Settings}
        options={{headerShown: false,  title: 'Settings' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

