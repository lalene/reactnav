import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';

{/**Screens Import */}
import Login from '../screens/Login';

import Home from '../screens/Home';
import News from '../screens/Home/News';
import Events from '../screens/Home/Events';
import Members from '../screens/Home/Members';
import About from '../screens/Home/About';

import Favorites from '../screens/Favorites';
import Sports from '../screens/Favorites/Sports';
import Movies from '../screens/Favorites/Movies';
import Technology from '../screens/Favorites/Technology';

import Profile from '../screens/Profile';

import More from '../screens/More';

{/** Home Screens */}
const HomeStack = createStackNavigator();
function HomeStackScreens() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={Home} />
			<HomeStack.Screen name="News" component={News} />
			<HomeStack.Screen name="Events" component={Events} />
			<HomeStack.Screen name="Members" component={Members} />
			<HomeStack.Screen name="About" component={About} />
		</HomeStack.Navigator>
	);
}

{/** Favorites Screens */}
const FavoritesStack = createStackNavigator();
function FavoritesStackScreens() {
	return (
		<FavoritesStack.Navigator>
			<FavoritesStack.Screen name="Favorites" component={Favorites} />
			<FavoritesStack.Screen name="Sports" component={Sports} />
			<FavoritesStack.Screen name="Movies" component={Movies} />
			<FavoritesStack.Screen name="Technology" component={Technology} />
		</FavoritesStack.Navigator>
	);
}

{/** Profile Screens */}
const ProfileStack = createStackNavigator();
function ProfileStackScreens() {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="Profile" component={Profile} />
		</ProfileStack.Navigator>
	);
}

{/** More Screens */}
const MoreStack = createStackNavigator();
function MoreStackScreens() {
	return (
		<MoreStack.Navigator>
			<MoreStack.Screen name="More" component={More} />
		</MoreStack.Navigator>
	);
}


const Tab = createBottomTabNavigator();
function TabNavigation() {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen
				name="Home"
				component={HomeStackScreens}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="home" color={color} size={30} />
					),
				}}
			/>

			<Tab.Screen
				name="Favorites"
				component={FavoritesStackScreens}
				options={{
					tabBarLabel: 'Favorites',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="favorite" color={color} size={30} />
					),
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={ProfileStackScreens}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="person" color={color} size={30} />
					),
				}}
			/>

			<Tab.Screen
				name="Menu"
				component={MoreStackScreens}
				options={{
					tabBarLabel: 'More',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="menu" color={color} size={30} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

/**Main Stack Navigation */
const MainStack = createStackNavigator();
function MainNavigation() {
	return (
		<NavigationContainer>
			<MainStack.Navigator headerMode={'none'}>
				<MainStack.Screen name="Login" component={Login} />
				<MainStack.Screen name="App" component={TabNavigation} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
}

export default MainNavigation;
