import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomButton from '../../components/CustomButton';

function Favorites({navigation}) {
  return (
    <View style={styles.container}>
      <CustomButton 
        label={"Sports"} 
        color={"#4E5051"} 
        onPress={()=>navigation.navigate("Sports")}
      />

      <CustomButton 
        label={"Movies"} 
        color={"#4E5051"} 
        onPress={()=>navigation.navigate("Movies")}
      />

      <CustomButton 
        label={"Technology"} 
        color={"#4E5051"} 
        onPress={()=>navigation.navigate("Technology")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  }
})

export default Favorites;