import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton';

function More({ navigation }) {
  return (
    <View style={styles.container}>
        <CustomButton 
            label={"Logout"} 
            color={"#1792C7"} 
            onPress={()=>navigation.navigate("Login")}
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
});

export default More;