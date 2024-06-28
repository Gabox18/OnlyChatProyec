import { View } from '../components/themed/Themed'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import ConfirmSignUp from '../components/ConfirmSignUp'
import { AuthProvider, AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export default function Wrapper() {
	return (
		<AuthProvider>
			<Auth />
		</AuthProvider>
	)
}

function Auth() {
	const { authState } = useContext(AuthContext)
	console.log('authState', authState, 'estoy en el auth')
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			{authState === 'signIn' && <SignIn />}
			{authState === 'signUp' && <SignUp />}
			{authState === 'confirmSignUp' && <ConfirmSignUp />}
		</View>
	)
}
