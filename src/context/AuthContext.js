import { Auth } from 'aws-amplify'
import { createContext, useState } from 'react'
import { signIn } from 'aws-amplify/auth'

const AuthContext = createContext({
	authState: 'signIn',
	setAuthState: () => {},
	email: '',
	setEmail: () => {},
	password: '',
	setPassword: () => {},
	setVerificationCode: () => {},
	verificationCode: '',
	isLoading: false,
	handleSignIn: () => {},
	handleSignUp: () => {},
	handleConfirmSignUp: () => {},
})

const { Provider } = AuthContext

function AuthProvider({ children }) {
	const [authState, setAuthState] = useState('signIn')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [verificationCode, setVerificationCode] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	async function handleSignIn() {
		if (!email || !password) {
			alert('Please enter an email and password')
			return
		}
		try {
			setIsLoading(true)
			const { isSignedIn } = await signIn({
				username: email,
				password,
			})
			console.log('user', isSignedIn)
			setAuthState('signedIn')
		} catch (error) {
			alert(error)
			console.log('error en el logueo', error)
			setIsLoading(false)
			console.log(error)
		}
	}

	async function handleSignUp() {
		if (!email || !password) {
			alert('Please enter an email and password')
			return
		}
		try {
			setIsLoading(true)
			await Auth.signUp({
				username: email,
				password,
			})
			setAuthState('confirmSignUp')
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			alert(error.message)
			console.log(error)
		}
	}

	async function handleConfirmSignUp() {
		if (!verificationCode) {
			alert('Please enter verification code')
			return
		}
		try {
			setIsLoading(true)
			await Auth.confirmSignUp(email, verificationCode)
			alert('Confirmed', 'You can now sign in.')
			setAuthState('signIn')
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			alert(error.message)
			console.log(error)
		}
	}

	return (
		<Provider
			value={{
				authState,
				setAuthState,
				email,
				setEmail,
				password,
				setPassword,
				handleSignIn,
				handleSignUp,
				handleConfirmSignUp,
				verificationCode,
				setVerificationCode,
				isLoading,
			}}
		>
			{children}
		</Provider>
	)
}

export { AuthContext, AuthProvider }
