import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import WithParams from './screens/WithParams';

const Stacks = createStackNavigator();
function MainStack(){
    return(
        <NavigationContainer>
            <Stacks.Navigator
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle:{
                        backgroundColor: "tomato"
                    }
                }}
            >
                <Stacks.Screen 
                name="ScreenOne" 
                component={ScreenOne}
                options={{
                    title: "Home"
                }}
                />
                <Stacks.Screen 
                    name="ScreenTwo" 
                    component={ScreenTwo}
                    options={{
                        title: "About"
                    }}
                />
                <Stacks.Screen 
                    name="WithParams" 
                    component={WithParams}
                    options={{
                        title: "Profile"
                    }}
                />
            </Stacks.Navigator>
        </NavigationContainer>
    )   
}

export default MainStack;