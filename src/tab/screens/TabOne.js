import React from 'react';
import {View, Text} from 'react-native';

function TabOne(){
    return(
        <View style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 20}}>Tab One</Text>
        </View>
        
    )
}

export default TabOne;