import * as React from 'react'
import { View, Pressable, StyleSheet, Image } from 'react-native'
import MyText from '../components/MyText'
import { useSelector, useDispatch } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import { Buffer } from 'buffer'
import { MYBUCKET } from '@env'
import { generateClient } from 'aws-amplify/api'
import { uploadData } from 'aws-amplify/storage'
import { updateUser } from '../graphql/mutations'
import { resetProfilePicture } from '../features/user'

const client = generateClient()

function ProfileFallback({ firstName }) {
	return (
		<View style={styles.fallback}>
			<MyText style={styles.initialLetter}>{firstName[0]}</MyText>
		</View>
	)
}

export default function ProfilePicture() {
	const user = useSelector(state => state.user)
	const { firstName, lastName, profilePicture, id } = user
	const dispatch = useDispatch()

	const pickeImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0.2,
			base64: true,
		})

		if (!result.canceled) {
			const fileName = result.assets[0].fileName
			const mimeType = result.assets[0].mimeType
			const fileBuffer = Buffer.from(result.assets[0].base64, 'base64')
			//save Photo In AWSS3 //save Photo In DB
			await savePhotoInAwsS3(fileName, mimeType, fileBuffer)
		}
	}

	const savePhotoInAwsS3 = async (fileName, mimeType, fileBuffer) => {
		try {
			const uploadFile = await uploadData({
				path: `public/profilePicture/${fileName}`,
				data: fileBuffer,
				options: { contentType: mimeType },
			}).result
			console.log('Succeeded: ', uploadFile)
			let newPhoto = `https://${MYBUCKET}.s3.amazonaws.com/${uploadFile.path}`
			dispatch(resetProfilePicture(newPhoto))
			updateUserPictureInDB(newPhoto)
		} catch (error) {
			console.log('Error : al subir a AWS S3 ', error)
		}
	}

	const updateUserPictureInDB = async newPhoto => {
		console.log(
			profilePicture,
			'profilePicture----> desde updateUserPictureInDB'
		)
		try {
			const userNewUpdate = await client.graphql({
				query: updateUser,
				variables: {
					input: {
						id: id,
						profilePicture: newPhoto,
					},
				},
			})
			console.log(
				'se guardo este foto desde updateUserPictureInDB---->',
				userNewUpdate
			)
		} catch (error) {
			console.log(
				error,
				'desde el updateUserPictureInDB al guardar foto de perfil'
			)
		}
	}

	return (
		<View style={styles.container}>
			<Pressable onPress={pickeImage}>
				{profilePicture ? (
					<Image source={{ uri: profilePicture }} style={styles.image} />
				) : (
					<ProfileFallback firstName={firstName} />
				)}
			</Pressable>
			<MyText style={{ fontWeight: 'bold' }}>
				{firstName} {lastName}
			</MyText>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		alignItems: 'center',
	},
	fallback: {
		backgroundColor: 'lightcoral',
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 6,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 6,
	},
	initialLetter: {
		fontSize: 60,
		lineHeight: 100,
		textAlign: 'center',
		color: 'white',
	},
})
