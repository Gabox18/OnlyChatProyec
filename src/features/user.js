import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: null,
	firstName: null,
	lastName: null,
	profilePicture: null,
	email: null,
	status: null,
	notificationToken: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			return (state = action.payload)
		},
		resetUser: state => {
			return (state = {
				id: null,
				firstName: null,
				lastName: null,
				profilePicture: null,
				email: null,
				status: null,
				notificationToken: null,
			})
		},
		resetProfilePicture: (state, action) => {
			return {
				...state,
				profilePicture: action.payload,
			}
		},
		resetFirstName: (state, action) => {
			return {
				...state,
				firstName: action.payload,
			}
		},
		resetLastName: (state, action) => {
			return {
				...state,
				lastName: action.payload,
			}
		},
		resetStatus: (state, action) => {
			return {
				...state,
				status: action.payload,
			}
		},
	},
})

export const {
	setUser,
	resetUser,
	resetProfilePicture,
	resetFirstName,
	resetLastName,
	resetStatus,
} = userSlice.actions
export default userSlice.reducer
