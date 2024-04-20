import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/counter/counterSlice";
import timerSlice from "../features/timer/timerSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {task: taskSlice, timer: timerSlice, user: authSlice},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
