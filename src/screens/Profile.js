import * as React from 'react'
import { View } from '../components/themed/Themed'
import ProfilePicture from '../components/profilePicture'
import { StatusBar, useColorScheme } from 'react-native'

export default function Profile() {
	const theme = useColorScheme()
	return (
		<View style={{ flex: 1 }}>
			<ProfilePicture />
			<StatusBar
				barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
			/>
		</View>
	)
}
