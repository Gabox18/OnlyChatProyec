import * as React from 'react'
import { ScrollView } from '../components/themed/Themed'
import ProfilePicture from '../components/profilePicture'
import { StatusBar, useColorScheme } from 'react-native'
import ProfileInformation from '../components/ProfileInformation'
import ProfilePermissions from '../components/ProfilePermissions'

export default function Profile() {
	const theme = useColorScheme()
	return (
		<ScrollView
			style={{ flex: 1 }}
			contentContainerStyle={{ paddingBottom: 100 }}
		>
			<ProfilePicture />
			<ProfileInformation />
			<ProfilePermissions />
			<StatusBar
				barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
			/>
		</ScrollView>
	)
}
