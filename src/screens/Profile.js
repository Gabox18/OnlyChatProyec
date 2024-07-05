import { Auth } from 'aws-amplify'
import * as React from 'react'
import MyText from '../components/MyText'
import MyButton from '../components/MyButton'
import { View } from '../components/themed/Themed'

export default function Profile() {
	return (
		<View style={{ flex: 1 }}>
			<MyText type='title'>Settings</MyText>
		</View>
	)
}
