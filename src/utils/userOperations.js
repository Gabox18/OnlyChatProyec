import { generateClient } from 'aws-amplify/api'
import { updateUser } from '../graphql/mutations'

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
