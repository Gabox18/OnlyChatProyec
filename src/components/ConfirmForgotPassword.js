import * as React from 'react'
import MyInput from './MyInput'
import MyButton from './MyButton'
import MyText from './MyText'
import { AuthContext } from '../context/AuthContext'

export default function ConfirmForgotPassword() {
	const { setAuthState, setEmail, isLoading } = React.useContext(AuthContext)

	return (
		<React.Fragment>
			<MyText type='title' style={{ marginBottom: 5 }}>
				Reset Password
			</MyText>
			<MyText type='caption' style={{ marginBottom: 15 }}>
				Enter your verification code and a new password.
			</MyText>
			<MyInput label='Verification Code' />
			<MyInput label='New Password' />
			<MyInput label='Confirm New Password' />
			<MyButton
				title={isLoading ? 'Loading...' : 'Reset Password'}
				disabled={isLoading ? true : false}
				style={{ marginTop: 20 }}
			/>
			<MyButton
				type='secondary'
				title='Back to Login'
				onPress={() => setAuthState('signIn')}
			/>
		</React.Fragment>
	)
}
