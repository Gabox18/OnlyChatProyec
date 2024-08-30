import * as Location from 'expo-location'
import { Alert, Linking } from 'react-native'
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher'

export async function requestLocationPermissions() {
	let { status } = await Location.requestForegroundPermissionsAsync()
	if (status !== 'granted') {
		Alert.alert(
			'Location permission denied',
			'Please enable location for this app in your phone settings',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('cancel pressed'),
					style: 'cancel',
				},
				{
					text: 'Go to Settings',
					onPress: () => {
						if (Platform.OS === 'ios') {
							Linking.openURL('app-settings:location')
						} else if (Platform.OS === 'android') {
							// Open location settings android
							startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS)
						} else {
							return
						}
					},
					style: 'default',
				},
			]
		)
		return null
	}
	const loc = await Location.getCurrentPositionAsync({})
	const latitude = loc.coords.latitude
	const longitude = loc.coords.longitude

	return {
		latitude,
		longitude,
	}
}
