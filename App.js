import React, { useEffect, useState } from 'react'
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import Root from './src/navigation/Root'
import Splash from './src/screens/Splash'
import AuthScreen from './src/screens/Auth'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native'
import { useColorScheme } from 'react-native'
import { store } from './src/app/store'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { Hub } from 'aws-amplify/utils'
import { setUser, resetUser } from './src/features/user'
import { generateClient } from 'aws-amplify/api'
import { getUser } from './src/graphql/queries'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
})

Amplify.configure(awsconfig)

const client = generateClient()

export default function WrapperAuthaws() {
	return (
		<Authenticator.Provider>
			<Provider store={store}>
				<App />
			</Provider>
		</Authenticator.Provider>
	)
}

function App() {
	const user = useSelector(state => state.user)
	const colorScheme = useColorScheme()
	const [isLoading, setIsLoading] = useState(true)
	const dispatch = useDispatch()

	const { authStatus } = useAuthenticator(context => [context.user])

	useEffect(() => {
		Hub.listen('auth', async ({ payload }) => {
			switch (payload.event) {
				case 'signedIn':
					console.log('user have been signedIn successfully.')
					//console.log('payload desde el HUB----->.', payload.data.userId)
					try {
						const userDb = await client.graphql({
							query: getUser,
							variables: {
								id: payload.data.userId,
							},
						})

						dispatch(
							setUser({
								id: userDb.data.getUser.id,
								firstName: userDb.data.getUser.firstName,
								lastName: userDb.data.getUser.lastName,
								profilePicture: userDb.data.getUser.profilePicture,
								email: userDb.data.getUser.email.toLowerCase(),
								status: userDb.data.getUser.status,
								notificationToken: userDb.data.getUser.notificationToken,
							})
						)
					} catch (error) {
						console.log(e, 'desde app getUser')
					}

					break
				case 'signedOut':
					dispatch(resetUser())
					console.log('user have been signedOut successfully.')
					break
				default:
					break
			}
		})
	}, [])

	if (authStatus === 'configuring')
		return <Splash setUser={setUser} setIsLoading={setIsLoading} />
	return authStatus === 'unauthenticated' ? (
		<AuthScreen />
	) : (
		<Root user={user} colorScheme={colorScheme} />
	)
}

// 	if (isLoading) return <Splash setIsLoading={setIsLoading} />
// 	return user.email ? (
// 		<Root user={user} colorScheme={colorScheme} />
// 	) : (
// 		<AuthScreen />
// 	)
// }
