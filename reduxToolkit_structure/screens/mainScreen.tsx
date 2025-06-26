import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MainScreen = () => {
    const navigation=useNavigation();
    const goToUser=()=>{
        navigation.navigate('UserScreen')
    }
    const goToAdmin=()=>{
        navigation.navigate("AdminScreen")
    }
  return (
    <View>
      <Text>MainScreen</Text>
      <Button title='go user screen' onPress={goToUser}/> 
      <Button title='go  admin screen' onPress={goToAdmin}/> 
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})