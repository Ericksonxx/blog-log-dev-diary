import { createSlice } from '@reduxjs/toolkit';

const currentTaskSlice = createSlice({
    name: 'currentTask',
    initialState: {
        id: '',
        title: '',
        undertitle: '',
        text: '',
        user_id: ''
    },
    reducers: {
       setCurrentTask(state, action) {
           const { id, title, undertitle, text, user_id } = action.payload;
           return {
               ...state,
               id,
               title,
               undertitle,
               text,
               user_id
           };
       },
    }
});

export const { setCurrentTask } = currentTaskSlice.actions;

export default currentTaskSlice.reducer;
