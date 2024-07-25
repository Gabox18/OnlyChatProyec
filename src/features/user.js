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
	},
})

export const { setUser, resetUser } = userSlice.actions
export default userSlice.reducer
