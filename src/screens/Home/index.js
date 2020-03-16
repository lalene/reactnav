import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import CustomButton from '../../components/CustomButton';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/header.png")}
        style={styles.headerImage}
      />

      <CustomButton 
        label={"News"} 
        color={"#4E5051"} 
        onPress={()=>navigation.navigate("News")}
      />

      <CustomButton 
        label={"Events"} 
        color={"#4E5051"} 
        onPress={()=>navigation.navigate("Events")}
      />

      <CustomButton 
        label={"Members"} 
        color={"#4E5051"} 
        onPress={()=>navigation.navigate("Members")}
      />

      <CustomButton 
        label={"About"} 
        color={"#4E5051"} 
        onPress={()=>navigation.navigate("About")}
      />
            
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  headerImage: {
    width: '100%',
    height: 200
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button:{
      marginVertical: 4,
      backgroundColor: "grey",
      padding: 14
  }
})

export default Home;