import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext, useTheme } from './darkTheme'

const Acomponent = () => {
    const {isTheme,toggleTheme}=useTheme()
    console.log("istheme===========",isTheme);
    
  return (
    <View style={[isTheme==='dark'? {backgroundColor:'lightpink'}:null]}>
      <Text>Acomponent</Text>
      <Button title='toggle theme'onPress={toggleTheme}/>
    </View>
  )
}

export default Acomponent

const styles = StyleSheet.create({})