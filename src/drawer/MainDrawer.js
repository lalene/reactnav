import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import {Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerOne from './screens/DrawerOne';
import DrawerTwo from './screens/DrawerTwo';
import DrawerThree from './screens/DrawerThree';
import { MaterialIcons } from 'react-native-vector-icons';
import { NativeModulesProxy } from '@unimodules/core';
import MainStack from '../stack/MainStack';

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props){
    return (
        <DrawerContentScrollView {...props}>
            <Image 
                source={{uri: "https://i.ytimg.com/vi/h1rBp6oF2M4/maxresdefault.jpg"}}
                style={{height: 200}}
            />
            <Text style={{fontSize: 18, color: "blue", padding: 8}}> JOHN DOE III </Text>
        </DrawerContentScrollView>
    )
}
function MainDrawer(){
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerType = "slide"  
                drawerContent={(props) => <CustomDrawerContent {...props} />}  
            >
                <Drawer.Screen
                    name="DrawerOne"
                    component={DrawerOne}
                    options={{
                        drawerIcon: ({color, size})=> <MaterialIcons name="home" color={color} size={35}/>,
                        drawerLabel: "Home"
                    }}
                />
                <Drawer.Screen
                    name="DrawerTwo"
                    component={MainStack}
                    options={{
                        drawerIcon: ({color, size})=> <MaterialIcons name="info" color={color} size={35}/>,
                        drawerLabel: "About"
                    }}
                />
                <Drawer.Screen
                    name="DrawerThree"
                    component={DrawerThree}
                    options={{
                        drawerIcon: ({color, size})=> <MaterialIcons name="people" color={color} size={35}/>,
                        drawerLabel: "Profile"
                    }}
                />
            </Drawer.Navigator>

               
        </NavigationContainer>
    )   
}

export default MainDrawer;