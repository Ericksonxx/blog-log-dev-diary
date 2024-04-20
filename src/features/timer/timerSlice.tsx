import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimeState {
    hours: number
    minutes: number
    seconds: number
    isRunning: boolean
}

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        isRunning: false
    },
    reducers: {
        startTimer(state) {
            state.isRunning = true
        },
        stopTimer(state) {
            state.isRunning = false
        },
        tick(state) {
        if(state.isRunning){
            state.seconds++
            if(state.seconds === 60){
                state.seconds = 0
                state.minutes++
                if(state.minutes === 60){
                    state.minutes = 0
                    state.hours++
                }
            }
        }
      },
      resetTimer(state){
        state.seconds = 0
        state.minutes = 0
        state.hours = 0
      }

    }
})

export const { startTimer, stopTimer, tick, resetTimer  } = timerSlice.actions

export default timerSlice.reducer