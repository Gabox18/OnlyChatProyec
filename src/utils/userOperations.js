import { generateClient } from 'aws-amplify/api'
import { updateUser, deleteUser as deleteMutation } from '../graphql/mutations'

const client = generateClient()

export const updateUserPictureInDB = async (usetID, newPhoto) => {
	try {
		const userNewUpdate = await client.graphql({
			query: updateUser,
			variables: {
				input: {
					id: usetID,
					profilePicture: newPhoto,
				},
			},
		})
		//console.log(userNewUpdate, 'desde updateUserPictureInDB---->')
		return userNewUpdate
	} catch (error) {
		console.log(error, 'desde el updateUserPictureInDB')
	}
}

export const updateUserStatusInDB = async (usetID, newStatus) => {
	try {
		const userNewUpdate = await client.graphql({
			query: updateUser,
			variables: {
				input: {
					id: usetID,
					status: newStatus,
				},
			},
		})
		//console.log(userNewUpdate, 'desde updateUserStatusInDB---->')
		return userNewUpdate
	} catch (error) {
		console.log(error, 'desde el updateUserStatusInDB')
	}
}

export const updateUserFirstNameInDB = async (usetID, newFirstName) => {
	try {
		const userNewUpdate = await client.graphql({
			query: updateUser,
			variables: {
				input: {
					id: usetID,
					firstName: newFirstName,
				},
			},
		})
		//console.log(userNewUpdate, 'desde updateUserFirstNameInDB---->')
		return userNewUpdate
	} catch (error) {
		console.log(error, 'desde el updateUserFirstNameInDB')
	}
}

export const updateUserLastNameInDB = async (usetID, newLastName) => {
	try {
		const userNewUpdate = await client.graphql({
			query: updateUser,
			variables: {
				input: {
					id: usetID,
					lastName: newLastName,
				},
			},
		})
		//console.log(userNewUpdate, 'desde updateUserLastNameDB---->')
		return userNewUpdate
	} catch (error) {
		console.log(error, 'desde el updateUserLastNameDB')
	}
}

export const updateUserNotificationTokenDB = async (usetID, token) => {
	try {
		const userNewUpdate = await client.graphql({
			query: updateUser,
			variables: {
				input: {
					id: usetID,
					notificationToken: token,
				},
			},
		})
		//console.log(userNewUpdate, 'desde updateUserNotificationTokenDB---->')
		return userNewUpdate
	} catch (error) {
		console.log(error, 'desde el updateUserNotificationTokenDB')
	}
}

export const updateUserLocationDB = async (usetID, location) => {
	const { latitude, longitude } = location
	try {
		const userNewUpdate = await client.graphql({
			query: updateUser,
			variables: {
				input: {
					id: usetID,
					latitude: latitude,
					longitude: longitude,
				},
			},
		})
		//console.log(userNewUpdate, 'desde updateUserLocationDB---->')
		return userNewUpdate
	} catch (error) {
		console.log(error, 'desde el updateUserLocationDB')
	}
}

export const deleteUserInDB = async userID => {
	try {
		const userNewUpdate = await client.graphql({
			query: deleteMutation,
			variables: {
				input: {
					id: userID,
				},
			},
		})
		console.log('desde deleteUser---->', userNewUpdate)
		return userNewUpdate
	} catch (error) {
		console.log(error, 'desde el updateUserLocationDB')
	}
}
