import { createContext, useState } from 'react'
import {
	signIn,
	signUp,
	confirmSignUp,
	resetPassword,
	confirmResetPassword,
	resendSignUpCode,
} from 'aws-amplify/auth'

const AuthContext = createContext({
	authState: 'default',
	setAuthState: () => {},
	email: '',
	setEmail: () => {},
	password: '',
	setPassword: () => {},
	verificationCode: '',
	setVerificationCode: () => {},
	isLoading: false,
	firstName: '',
	setLastName: () => {},
	lastName: '',
	confirmPassword: '',
	setConfirmPassword: () => {},
	setFirstName: () => {},
	handleSignIn: () => {},
	handleSignUp: () => {},
	handleConfirmSignUp: () => {},
	handleForgotPassword: () => {},
	handleResetPassword: () => {},
	handleResendVerificationCode: () => {},
})

const { Provider } = AuthContext

function AuthProvider({ children }) {
	const [authState, setAuthState] = useState('default')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [verificationCode, setVerificationCode] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

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
		if (password !== confirmPassword) {
			alert('Passwords do not match')
			return
		}
		try {
			setIsLoading(true)
			const { isSignUpComplete, userId, nextStep } = await signUp({
				username: email,
				password,
				options: {
					userAttributes: {
						given_name: firstName,
						family_name: lastName,
					},
				},
			})
			// console.log(
			// 	`isSignUpComplete === ${isSignUpComplete}
			// 	userId === ${userId}
			// 	nextStep === ${nextStep}`
			// )
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

	async function handleForgotPassword() {
		if (!email) {
			alert('Please enter an email')
			return
		}
		try {
			setIsLoading(true)
			const output = await resetPassword({ username: email })
			const { nextStep } = output
			console.log(`esto tiene el ${nextStep}`)
			switch (nextStep.resetPasswordStep) {
				case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
					const codeDeliveryDetails = nextStep.codeDeliveryDetails
					console.log(
						`El código de confirmación fue enviado a ${codeDeliveryDetails.deliveryMedium}`
					)

					// Recopila el código de confirmación del usuario y pásalo a confirmResetPassword.
					break
				case 'DONE':
					console.log('Successfully reset password.')
					break
			}
			setAuthState('confirmForgotPassword')
			setIsLoading(false)
		} catch (e) {
			alert(e.message)
			setIsLoading(false)
		}
	}

	async function handleResetPassword() {
		if (!verificationCode || verificationCode.length !== 6) {
			alert('Please enter a valid verification code')
			return
		}
		if (password !== confirmPassword) {
			alert('Passwords do not match')
			return
		}
		try {
			setIsLoading(true)
			await confirmResetPassword({
				username: email,
				confirmationCode: verificationCode,
				newPassword: password,
			})
			alert('Password reset successfully, Now you can Sign In')
			setAuthState('signIn')
			setIsLoading(false)
		} catch (e) {
			alert(e.message)
			setIsLoading(false)
		}
	}

	async function handleResendVerificationCode() {
		try {
			await resendSignUpCode({ username: email })
			alert(`Successfully resent confirmation code to ${email}`)
		} catch (e) {
			alert(e)
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
				firstName,
				setFirstName,
				lastName,
				setLastName,
				confirmPassword,
				setConfirmPassword,
				handleForgotPassword,
				handleResendVerificationCode,
				handleResetPassword,
			}}
		>
			{children}
		</Provider>
	)
}

export { AuthContext, AuthProvider }
