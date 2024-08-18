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
	},
})

export const { setUser, resetUser, resetProfilePicture } = userSlice.actions
export default userSlice.reducer
