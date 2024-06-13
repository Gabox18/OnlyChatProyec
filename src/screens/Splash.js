import * as React from 'react'
import { View } from 'react-native'
import MyText from '../components/MyText'
import { Auth } from 'aws-amplify'

export default function Splash({ setUser, setIsLoading }) {
	React.useEffect(() => {
		;(async () => {
			try {
				let { attributes } = await Auth.currentAuthenticatedUser()
				setUser(attributes)
				setIsLoading(false)
				// console.log(attributes);
			} catch (e) {
				console.log(e)
				setIsLoading(false)
			}
		})()
	}, [])

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<MyText type='title'>🕰</MyText>
			<MyText type='title'>Loading...</MyText>
		</View>
	)
}
