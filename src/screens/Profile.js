import * as React from 'react'
import { ScrollView } from '../components/themed/Themed'
import ProfilePicture from '../components/profilePicture'
import { StatusBar, useColorScheme } from 'react-native'
import ProfileInformation from '../components/ProfileInformation'

export default function Profile() {
	const theme = useColorScheme()
	return (
		<ScrollView style={{ flex: 1 }}>
			<ProfilePicture />
			<ProfileInformation />
			<StatusBar
				barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
			/>
		</ScrollView>
	)
}
