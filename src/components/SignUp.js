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
			<MyText type='title'>Sign Up</MyText>
			<MyInput label='Email' onChangeText={setEmail} />
			<MyInput label='Password' onChangeText={setPassword} secureTextEntry />
			<MyButton title='Sign Up' onPress={handleSignUp} />
			<MyButton title='Sign In' onPress={() => setAuthState('signIn')} />
		</React.Fragment>
	)
}
