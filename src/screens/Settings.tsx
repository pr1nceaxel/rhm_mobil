import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
  return (

    <View style={styles.container}>
    <Text style={styles.text}>Settings</Text>
  </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 18 
    }
  })
  