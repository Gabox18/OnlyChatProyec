import MyText from './MyText'
import Colors from '../../constants/colors'
import { useSelector, useDispatch } from 'react-redux'
import {
	View,
	useColorScheme,
	StyleSheet,
	Switch,
	Alert,
	Pressable,
} from 'react-native'
import {
	deleteUserInDB,
	updateUserLocationDB,
	updateUserNotificationTokenDB,
} from '../utils/userOperations'
import {
	resetNotificationToken,
	resetLocation,
	resetUser,
} from '../features/user'
import { isDevice } from 'expo-device'
import { registerForPushNotificationsAsync } from '../utils/registerForPushNotificationsAsync'
import { requestLocationPermissions } from '../utils/requestUserLocation'
import { useAuthenticator } from '@aws-amplify/ui-react-native'
import { deleteUser } from 'aws-amplify/auth'

export default function ProfilePermissions() {
	const user = useSelector(state => state.user)
	const theme = useColorScheme()
	const dispatch = useDispatch()
	const { signOut } = useAuthenticator()

	async function handleToggleLocation() {
		if (user.latitude === null) {
			const location = await requestLocationPermissions()
			if (location !== null) {
				await updateUserLocationDB(user.id, location)
				dispatch(resetLocation(location))
			}
		} else {
			await updateUserLocationDB(user.id, { latitude: null, longitude: null })
			dispatch(resetLocation({ latitude: null, longitude: null }))
		}
	}

	async function handleToggleNotifications() {
		if (isDevice) {
			if (user.notificationToken === null) {
				const token = await registerForPushNotificationsAsync()
				if (token !== null) {
				}
				await updateUserNotificationTokenDB(user.id, token)
				dispatch(resetNotificationToken(token))
				console.log('token desde toggleNotification', token)
			} else {
				await updateUserNotificationTokenDB(user.id, null)
				dispatch(resetNotificationToken(null))
			}
		} else {
			alert('this do not work on a simulator')
		}
	}

	async function handleSignOut() {
		try {
			await signOut()
			dispatch(resetUser())
		} catch (e) {
			console.log(e)
		}
	}

	async function handleDeleteAccount() {
		Alert.alert(
			'Delete Account',
			"Your information will be permanently deleted, you can't revert this action",
			[
				{
					text: 'Cancel',
					onPress: () => console.log('cancel pressed'),
					style: 'cancel',
				},
				{
					text: 'Delete Account',
					onPress: async () => {
						await deleteUserInDB(user.id)
						try {
							await deleteUser()
							dispatch(resetUser())
							console.log('account deleted successfully')
						} catch (error) {
							console.log(error)
						}
					},
					style: 'destructive',
				},
			]
		)
	}

	return (
		<View>
			<MyText
				type='caption'
				style={{ fontWeight: '600', color: Colors[theme].text + '40' }}
			>
				PERMISSIONS
			</MyText>
			<InfoField
				theme={theme}
				label={'Notifications'}
				value={user.notificationToken ? true : false}
				handleUpdate={handleToggleNotifications}
			/>
			<InfoField
				theme={theme}
				label={'Location'}
				value={user.latitude ? true : false}
				handleUpdate={handleToggleLocation}
			/>
			<Pressable
				onPress={handleSignOut}
				style={[
					Styles.fieldContainer,
					{ borderBottomColor: Colors[theme].text + '80', paddingVertical: 22 },
				]}
			>
				<MyText
					type='caption'
					style={{
						fontWeight: '500',
						color: Colors[theme].text + '80',
						paddingRight: 10,
					}}
				>
					Sign out
				</MyText>
			</Pressable>
			<Pressable
				onPress={handleDeleteAccount}
				style={[
					Styles.fieldContainer,
					{ borderBottomColor: Colors[theme].text + '80', paddingVertical: 22 },
				]}
			>
				<MyText
					type='caption'
					style={{
						fontWeight: '500',
						color: Colors[theme].red,
						paddingRight: 10,
					}}
				>
					Delete Account
				</MyText>
			</Pressable>
		</View>
	)
}

function InfoField({ label, value, theme, handleUpdate }) {
	return (
		<View
			style={[
				Styles.fieldContainer,
				{ borderBottomColor: Colors[theme].text + '80' },
			]}
		>
			<MyText
				type='caption'
				style={{
					fontWeight: '500',
					color: Colors[theme].text + '80',
					paddingRight: 10,
				}}
			>
				{label}
			</MyText>
			<Switch value={value} onChange={handleUpdate} />
		</View>
	)
}

const Styles = StyleSheet.create({
	fieldContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: StyleSheet.hairlineWidth, //lineas separadora
		paddingVertical: 15,
	},
})

