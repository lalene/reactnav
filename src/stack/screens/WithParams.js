import React from 'react';
import { View, Text, Button } from 'react-native';

function WithParams({navigation, route}){
    return(
        <View style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Company: {route.params.company}</Text>
            <Text>Name: {route.params.name}</Text>
            <Text>Age: {route.params.age}</Text>
            <Button
                title="OPEN SCREEN 2"
                onPress={()=>navigation.navigate("ScreenTwo")}
            />
        </View>
    )
}

export default WithParams;