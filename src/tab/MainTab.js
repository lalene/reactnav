import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabOne from './screens/TabOne';
import TabTwo from './screens/TabTwo';
import TabThree from './screens/TabThree';
import { MaterialIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

function MainTab(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="TabTwo"
                tabBarOptions={{
                    activeTintColor: "white",
                    inactiveTintColor: "white",
                    activeBackgroundColor: "tomato",
                    inactiveBackgroundColor: "black"
                }}
            >
                <Tab.Screen
                    name="TabOne"
                    component={TabOne}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({color, size})=> <MaterialIcons name="home" color={color} size={35}/>
                    }}
                />
                <Tab.Screen
                    name="TabTwo"
                    component={TabTwo}
                    options={{
                        tabBarLabel: "Info",
                        tabBarIcon: ({color, size})=> <MaterialIcons name="info" color={color} size={35}/>
                    }}
                />
                <Tab.Screen
                    name="TabThree"
                    component={TabThree}
                    options={{
                        tabBarLabel: "About",
                        tabBarIcon: ({color, size})=> <MaterialIcons name="people" color={color} size={35}/>
                    }}
                />
            </Tab.Navigator>

               
        </NavigationContainer>
    )   
}

export default MainTab;