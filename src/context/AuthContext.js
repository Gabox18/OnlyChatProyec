import { createContext, useState } from 'react'
import { signIn, signUp, confirmSignUp } from 'aws-amplify/auth'

const AuthContext = createContext({
	authState: 'default',
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
	const [authState, setAuthState] = useState('default')
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
			setIsLoading(false)
		}
	}

	async function handleSignUp() {
		if (!email || !password) {
			alert('Please enter an email and password')
			return
		}
		try {
			setIsLoading(true)
			const { isSignUpComplete, userId, nextStep } = await signUp({
				username: email,
				password,
			})
			console.log(
				`isSignUpComplete === ${isSignUpComplete}
				userId === ${userId}
				nextStep === ${nextStep}`
			)
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
			await confirmSignUp({
				username: email,
				confirmationCode: verificationCode,
			})
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
