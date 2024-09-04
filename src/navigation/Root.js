import * as React from 'react'
import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Onboarding from '../screens/Onboarding'
import Ionicons from '@expo/vector-icons/Ionicons'
import Chats from '../screens/Chats'
import NewPost from '../screens/NewPost'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function Root({ colorScheme }) {
	return (
		<NavigationContainer
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<BottomNavigation />
		</NavigationContainer>
	)
}

function BottomNavigation() {
	return (
		<Tab.Navigator initialRouteName='Home'>
			<Tab.Screen
				name='HomeStack'
				component={HomeStack}
				options={{
					tabBarIcon: ({ color }) => {
						return <TabBarIcon name='home' color={color} />
					},
					headerShown: false,
					tabBarLabel: 'Home',
				}}
			/>
			<Tab.Screen
				name='Chats'
				component={Chats}
				options={{
					tabBarIcon: ({ color }) => {
						return <TabBarIcon name='chatbubbles' color={color} />
					},
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='person-circle' color={color} />
					),
					tabBarLabel: 'Settings',
				}}
			/>
		</Tab.Navigator>
	)
}

function HomeStack() {
	return (
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Onboarding'
				component={Onboarding}
				options={{
					headerShown: false,
					presentation: 'fullScreenModal',
				}}
			/>
			<Stack.Screen
				name='NewPost'
				component={NewPost}
				options={{
					presentation: 'modal',
				}}
			/>
		</Stack.Navigator>
	)
}

function TabBarIcon(props) {
	return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />
}
