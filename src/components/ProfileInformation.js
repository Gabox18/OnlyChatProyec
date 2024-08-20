import MyText from './MyText'
import Colors from '../../constants/colors'
import { useSelector, useDispatch } from 'react-redux'
import { View, useColorScheme, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import {
	updateUserFirstNameInDB,
	updateUserLastNameInDB,
	updateUserStatusInDB,
} from '../utils/userOperations'
import { resetFirstName, resetLastName, resetStatus } from '../features/user'

export default function ProfileInformation() {
	const user = useSelector(state => state.user)
	const theme = useColorScheme()

	return (
		<View>
			<MyText
				type='caption'
				style={{ fontWeight: '600', color: Colors[theme].text + '40' }}
			>
				INFORMATION
			</MyText>
			<InfoField
				theme={theme}
				label={'First Name'}
				canEdit
				value={user.firstName}
				handleUpdate={updateUserFirstNameInDB}
				handleRedux={resetFirstName}
			/>
			<InfoField
				theme={theme}
				label={'Last Name'}
				canEdit
				value={user.lastName}
				handleUpdate={updateUserLastNameInDB}
				handleRedux={resetLastName}
			/>
			<InfoField theme={theme} label={'Email'} value={user.email} />
			<InfoField
				theme={theme}
				label={'Status'}
				canEdit
				value={user.status}
				handleUpdate={updateUserStatusInDB}
				handleRedux={resetStatus}
			/>
		</View>
	)
}

function InfoField({
	label,
	value,
	theme,
	canEdit,
	handleUpdate,
	handleRedux,
}) {
	const { id } = useSelector(state => state.user)
	const [localValue, setLocalValue] = useState(value)
	const dispatch = useDispatch()
	return (
		<View style={Styles.fieldContainer}>
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
			<TextInput
				placeholder={label}
				value={localValue}
				onChangeText={canEdit && setLocalValue}
				keyboardType={canEdit ? 'web-search' : 'default'}
				onSubmitEditing={event => {
					canEdit && handleUpdate(id, event.nativeEvent.text)
					canEdit && dispatch(handleRedux(event.nativeEvent.text))
				}}
				style={{ fontWeight: '500', color: Colors[theme].text, flexShrink: 1 }}
			/>
		</View>
	)
}

const Styles = StyleSheet.create({
	fieldContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: StyleSheet.hairlineWidth, //lineas separadora
		paddingVertical: 15,
	},
})
