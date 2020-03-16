import React from 'react';
import { View, Text, Button } from 'react-native';

function ScreenOne({navigation}){
    return(
        <View style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text> SCREEN ONE </Text>
            <Button
                title="OPEN SCREEN 2"
                onPress={()=>navigation.navigate("ScreenTwo")}
            />
            <Button
                title="OPEN WITH PARAMETER"
                onPress={()=>navigation.navigate("WithParams", {
                    company: "XYZ Company",
                    age: 30,
                    name: "Lalene de Pio"
                })}
            />
        </View>
    )
}

export default ScreenOne;