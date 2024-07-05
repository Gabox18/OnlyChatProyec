import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import Root from './src/navigation/Root'
import Splash from './src/screens/Splash'
import AuthScreen from './src/screens/Auth'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native'
import { useState } from 'react'
import { useColorScheme } from 'react-native'

Amplify.configure(awsconfig)

export default function WrapperAuthaws() {
	return (
		<Authenticator.Provider>
			<App />
		</Authenticator.Provider>
	)
}

function App() {
	const colorScheme = useColorScheme()
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	const { authStatus } = useAuthenticator(context => [context.user])
	console.log('estoy en la principal', authStatus)

	if (authStatus === 'configuring')
		return <Splash setUser={setUser} setIsLoading={setIsLoading} />
	return authStatus === 'unauthenticated' ? (
		<AuthScreen />
	) : (
		<Root user={user} colorScheme={colorScheme} />
	)
}

//17:16
