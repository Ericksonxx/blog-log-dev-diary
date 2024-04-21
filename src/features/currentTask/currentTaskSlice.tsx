import { createSlice } from '@reduxjs/toolkit'

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
           state.id = action.payload.id
           state.title = action.payload.title
           state.undertitle = action.payload.undertitle
           state.text = action.payload.text
           state.user_id = action.payload.user_id
       },
    }
})

export const { setCurrentTask } = currentTaskSlice.actions

export default currentTaskSlice.reducer