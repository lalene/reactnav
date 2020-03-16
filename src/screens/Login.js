import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

function Login({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REACT NATIVE CEBU</Text>
            
            <CustomButton 
                label={"Login"} 
                color={"#1792C7"}
                onPress={()=>navigation.navigate("App")}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    title:{
        fontSize: 28,
        marginVertical: 16
    },
})
export default Login;