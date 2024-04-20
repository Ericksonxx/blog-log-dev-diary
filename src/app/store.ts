import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/counter/counterSlice";
import timerSlice from "../features/timer/timerSlice";


export const store = configureStore({
    reducer: {task: taskSlice, timer: timerSlice},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
