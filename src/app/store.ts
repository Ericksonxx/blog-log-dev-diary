import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/counter/counterSlice";
import timerSlice from "../features/timer/timerSlice";
import authSlice from "../features/auth/authSlice";
import currentTaskSlice from "../features/currentTask/currentTaskSlice";

export const store = configureStore({
    reducer: {
        task: taskSlice, 
        timer: timerSlice, 
        user: authSlice,
        currentTask: currentTaskSlice
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
