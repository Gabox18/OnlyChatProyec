import * as React from 'react'
import MyText from '../components/MyText'
import MyButton from '../components/MyButton'
import { useAuthenticator } from '@aws-amplify/ui-react-native'
//import { fetchUserAttributes } from 'aws-amplify/auth'
import { View } from '../components/themed/Themed'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home() {
	const [user, setUser] = React.useState(null)
	const navigation = useNavigation()
	React.useEffect(() => {
		async function checkFirstLaunch() {
			const firstLaunch = await AsyncStorage.getItem('@firstLaunch')
			if (firstLaunch === null) navigation.navigate('Onboarding')
		}

		checkFirstLaunch()
		// ;(async () => {
		// 	try {
		// 		const { email, family_name, given_name } = await fetchUserAttributes()
		// 		setUser({ email, family_name, given_name })
		// 	} catch (e) {
		// 		console.log(e)
		// 	}
		// })()
		// navigation.navigate('Onboarding')
	}, [])

	const { signOut } = useAuthenticator()
	//console.log(user)
	return (
		<View style={{ flex: 1 }}>
			<MyText type='title'>Welcome back! 🚀</MyText>
			{/* <MyText>{`${user?.given_name} ${user?.family_name}`}</MyText>
			<MyText>{user?.email}</MyText> */}
			<MyButton title={'Sign Out'} onPress={signOut} />
		</View>
	)
}
