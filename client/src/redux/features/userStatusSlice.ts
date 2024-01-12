import { createSlice } from '@reduxjs/toolkit/react';
import { RootState } from '../state/store';

const initialState = {
	progress: 0,
	grade: 0,
	categories: ['HTML', 'CSS', 'JavaScript']
};

const userStatusSlice = createSlice({
	name: 'userStatus',
	initialState,
	reducers: {
		updateUserStatus: (state, action) => {
			return { state, ...action.payload };
		},
		resetUserStatus: () => initialState,
	},
});

export const userStatusState = (state: RootState) => state.userStatus;

export const { updateUserStatus, resetUserStatus } = userStatusSlice.actions;

export default userStatusSlice.reducer;
