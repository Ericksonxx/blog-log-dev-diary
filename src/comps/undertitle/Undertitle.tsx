import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setUndertitle } from '../../features/counter/counterSlice'
import './Undertitle.css'
import { useEffect, useState } from 'react'
import { setCurrentTask } from '../../features/currentTask/currentTaskSlice'

export default function Title() {

    const task = useAppSelector(state => state.task)
    const currentTask = useAppSelector(state => state.currentTask)
    const dispatch = useAppDispatch()   
    
    const [newUndertitle, setNewUndertitle] = useState('');
    
    useEffect(() => {
        setNewUndertitle(currentTask.undertitle)
    }, [currentTask])


    function handleChange(e: any) {
        setNewUndertitle(e.target.value)
        dispatch(setCurrentTask({...currentTask, undertitle: e.target.value}))
    }



    return (
        <>
           <div className='undertitle'>
           {currentTask.undertitle === '' ?
               <input value={task.undertitle} onChange={(e) => dispatch(setUndertitle(e.target.value))} />
               : 
               <input value={newUndertitle} onChange={(e) => handleChange(e)}  />
            }
           </div>
        </>
    )
}