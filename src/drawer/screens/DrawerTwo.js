import React from 'react';
import {View, Text} from 'react-native';

function DrawerTwo(){
    return(
        <View style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 20}}>Drawer Two</Text>
        </View>
        
    )
}

export default DrawerTwo;