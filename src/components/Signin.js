import MyInput from './MyInput'
import MyButton from './MyButton'
import MyText from './MyText'
//import { Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { Fragment, useContext } from 'react'

export default function SignIn() {
	const { setAuthState, setEmail, setPassword, handleSignIn } =
		useContext(AuthContext)

	return (
		<Fragment>
			<MyText type='title'>Sign In</MyText>
			<MyInput label='Email' onChangeText={setEmail} />
			<MyInput label='Password' secureTextEntry onChangeText={setPassword} />
			<MyButton title='Sign In' onPress={handleSignIn} />
			<MyButton
				title='Sign Up'
				type=''
				onPress={() => setAuthState('signUp')}
			/>
		</Fragment>
	)
}
//1:20:19 youtube
