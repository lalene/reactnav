import React from 'react';
import {View, Text, Button} from 'react-native';

function DrawerOne({navigation}){
    return(
        <View style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 20}}>Drawer One</Text>
            <Button 
                title="Open Drawer"
                onPress={()=>navigation.toggleDrawer()}
                />
        </View>
        
    )
}

export default DrawerOne;