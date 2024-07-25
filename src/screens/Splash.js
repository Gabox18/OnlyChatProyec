import * as React from 'react'
import { View } from 'react-native'
import MyText from '../components/MyText'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { setUser } from '../features/user'
import { generateClient } from 'aws-amplify/api'
import { getUser } from '../graphql/queries'
import { useDispatch } from 'react-redux'

export default function Splash({ setIsLoading }) {
	const dispatch = useDispatch()
	const client = generateClient()

	React.useEffect(() => {
		;(async () => {
			try {
				let attributes = await fetchUserAttributes()
				setIsLoading(false)
				const userDb = await client.graphql({
					query: getUser,
					variables: {
						id: attributes.sub,
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
				//console.log('atributos desde el splash', attributes)
			} catch (e) {
				console.log(e, 'error del los atributos estoy en el splash')
				setIsLoading(false)
			}
		})()
	}, [])

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<MyText type='title'>🕰</MyText>
			<MyText type='title'>Loading...</MyText>
		</View>
	)
}
