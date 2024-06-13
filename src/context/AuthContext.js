import * as React from 'react'
import { Auth ,} from 'aws-amplify'

const AuthContext = React.createContext({
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
	const [authState, setAuthState] = React.useState('signIn')
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [verificationCode, setVerificationCode] = React.useState('')
	const [isLoading, setIsLoading] = React.useState(false)

	async function handleSignIn() {
		if (!email || !password) {
			alert('Please enter an email and password')
			return
		}
		try {
			setIsLoading(true)
			const user = await Auth.signIn({
				username: email,
				password,
			})
			console.log('user', user)
			setAuthState('signedIn')
		} catch (error) {
			alert(error.message)
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
