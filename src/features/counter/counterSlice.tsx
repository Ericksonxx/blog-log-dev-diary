import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TaskState {
    title: string
    undertitle: string
    text: string
}

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        title: 'Undefined Task',
        undertitle: 'Not Set',
        text: 'Write here....',
    },
    reducers: {
       setTitle(state, action) {
           state.title = action.payload
       },
       setUndertitle(state, action) {
           state.undertitle = action.payload
       },
       setText(state, action) {
           state.text = action.payload
       }
    }
})

export const { setTitle, setUndertitle, setText  } = taskSlice.actions

export default taskSlice.reducer