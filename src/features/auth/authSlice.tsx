import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logged: false,
    id: ''
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser(state,actions) {
            state.logged = !!state.id;
            state.id = actions.payload
        },
        logOut(state) {
            state.logged = false;
            state.id = '';
        },
        logIn(state, action) {
            const { id } = action.payload;
            state.id = id;
            state.logged = true;
        }
    }
});

export const { getUser, logOut, logIn } = authSlice.actions;

export default authSlice.reducer;
