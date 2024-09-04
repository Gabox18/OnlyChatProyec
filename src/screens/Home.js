import * as React from 'react'
import MyText from '../components/MyText'
import { View } from '../components/themed/Themed'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home() {
	const navigation = useNavigation()
	React.useEffect(() => {
		async function checkFirstLaunch() {
			const firstLaunch = await AsyncStorage.getItem('@firstLaunch')
			if (firstLaunch === null) navigation.navigate('Onboarding')
		}

		checkFirstLaunch()
	}, [])

	return (
		<View style={{ flex: 1 }}>
			<MyText type='title'>Home</MyText>
		</View>
	)
}

//7:56
