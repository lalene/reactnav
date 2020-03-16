import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

function Profile() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../assets/profile.png")}
        style={{width: 220, height: 220}}
      />
      <Text style={styles.text}>John Doe III</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default Profile;