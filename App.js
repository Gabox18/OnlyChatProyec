import * as React from 'react'
import awsConfig from './src/aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react-native'
import { Amplify, Auth, Hub } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import Root from './src/navigation/Root'
import Splash from './src/screens/Splash'
import AuthScreen from './src/screens/Auth'


Amplify.configure(awsconfig)

export default function App() {
	const [user, setUser] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(true)

	const listener = data => {
		switch (data.payload.event) {
			case 'signIn':
				const { attributes } = data.payload.data
				console.log('hello world', attributes)
				setUser(attributes)
				console.log('user signed in')
				break
			case 'signOut':
				setUser(null)
				console.log('user signed out')
				break
			default:
				break
		}
	}

	//Hub.listen('auth', listener)

	if (isLoading) return <Splash setUser={setUser} setIsLoading={setIsLoading} />
	return user ? <Root user={user} /> : <AuthScreen />
}
