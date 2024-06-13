import * as React from 'react'
import MyInput from './MyInput'
import MyButton from './MyButton'
import MyText from './MyText'
import { Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export default function ConfirmSignUp() {
	const { email, setEmail, setVerificationCode, handleConfirmSignUp } =
		React.useContext(AuthContext)
	return (
		<React.Fragment>
			<MyText type='title'>Confirm Sign Up</MyText>
			<MyInput label='Email' value={email} onChangeText={setEmail} />
			<MyInput label='Code' onChangeText={setVerificationCode} />
			<MyButton title='Confirm' onPress={handleConfirmSignUp} />
			<Button title='Re-send Code' />
		</React.Fragment>
	)
}
