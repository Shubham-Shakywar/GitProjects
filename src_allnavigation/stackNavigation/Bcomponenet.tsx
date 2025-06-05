import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bcomponenet = ({ route }: any) => {
  console.log("Route params:", route.params); // This should log { name: 'meetanshi' }

  return (
    <View>
      <Text>Bcomponenet</Text>
      <Text>{route?.params?.name}</Text> 
    </View>
  )
}

export default Bcomponenet

