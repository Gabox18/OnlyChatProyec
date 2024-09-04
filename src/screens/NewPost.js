import * as React from 'react'
import MyText from '../components/MyText'
import { View } from '../components/themed/Themed'

export default function NewPost() {
	return (
		<View>
			<MyText type='caption'>What are you thinking?</MyText>
		</View>
	)
}
