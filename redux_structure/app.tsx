import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyStore } from './store'
import ThemeComponenet from './themeComponenet'
import { Provider } from 'react-redux';
const App = () => {
  return (
  <Provider store={MyStore}>
    <ThemeComponenet/>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})