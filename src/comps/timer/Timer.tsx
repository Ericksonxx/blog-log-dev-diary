import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
//TODO: add resetTimer
import { startTimer, stopTimer, tick } from '../../features/timer/timerSlice'
import './Timer.css'


export default function Title() {
    const task = useAppSelector(state => state)
    const dispatch = useAppDispatch()  
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(tick()); // Dispatch tick action every second
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [dispatch]);
    


    return (
        <>
            <div className='timer'>
                <p>{task.timer.hours}:{task.timer.minutes}:{task.timer.seconds} </p>
                {task.timer.isRunning ?
                    <button onClick={() => dispatch(stopTimer())}>Stop</button>
                    :
                    <button onClick={() => dispatch(startTimer())}>Start</button>
                }
                

            </div>
        </>
    )
}