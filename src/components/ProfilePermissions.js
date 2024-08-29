import MyText from './MyText'
import Colors from '../../constants/colors'
import { useSelector, useDispatch } from 'react-redux'
import { View, useColorScheme, StyleSheet, Switch } from 'react-native'
import { updateUserNotificationTokenDB } from '../utils/userOperations'
import { resetNotificationToken, resetLocation } from '../features/user'
import { isDevice } from 'expo-device'
import { registerForPushNotificationsAsync } from '../utils/registerForPushNotificationsAsync'

export default function ProfilePermissions() {
	const user = useSelector(state => state.user)
	const theme = useColorScheme()
	const dispatch = useDispatch()

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


//31:12