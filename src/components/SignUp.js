import * as React from 'react'
import MyInput from './MyInput'
import MyButton from './MyButton'
import MyText from './MyText'
import { Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export default function SignUp() {
	const { setAuthState, setEmail, setPassword, handleSignUp } =
		React.useContext(AuthContext)
	return (
		<React.Fragment>
			<MyText type='title' style={{ marginBottom: 35 }}>
				Join the amazing community
			</MyText>
			<MyInput label='First Name' />
			<MyInput label='Last Name' />
			<MyInput label='Email' onChangeText={setEmail} />
			<MyInput label='Password' onChangeText={setPassword} secureTextEntry />
			<MyInput
				label='Confirm Password'
				onChangeText={setPassword}
				secureTextEntry
			/>
			<MyButton title='Join Me' onPress={handleSignUp} />
			<MyButton
				title='Go Back'
				type='secondary'
				onPress={() => setAuthState('signIn')}
			/>
		</React.Fragment>
	)
}
