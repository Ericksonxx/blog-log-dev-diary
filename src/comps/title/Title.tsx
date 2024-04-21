import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setTitle } from '../../features/counter/counterSlice'
import './Title.css'
import { useEffect, useState } from 'react'
import { setCurrentTask } from '../../features/currentTask/currentTaskSlice'
export default function Title() {

    const task = useAppSelector(state => state.task)
    const currentTask = useAppSelector(state => state.currentTask)
    const dispatch = useAppDispatch()   
    
    const [newTitle, setNewTitle] = useState('Title')
    
    useEffect(() => {
        setNewTitle(currentTask.title)
    }, [currentTask])

    function handleChange(e: any) {
        setNewTitle(e.target.value)
        dispatch(setCurrentTask({...currentTask, title: e.target.value}))
    }


    return (
        <>
        <div className='title'>
        {currentTask.title === '' ?
               <input value={task.title} onChange={(e) => dispatch(setTitle(e.target.value))} />
               : 
               <input value={newTitle} onChange={(e) => handleChange(e)}  />
            }
        </div>
        </>
    )
}