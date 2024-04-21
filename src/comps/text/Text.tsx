import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setText } from '../../features/counter/counterSlice'
import './Text.css'
import { useEffect, useState } from 'react'
import { setCurrentTask } from '../../features/currentTask/currentTaskSlice'
import Tiptap from '../tiptap/tiptap'
export default function Title() {

    const task = useAppSelector(state => state.task)
    const currentTask = useAppSelector(state => state.currentTask)
    const dispatch = useAppDispatch()   
    
    const [newText, setNewText] = useState('Text');
    
    useEffect(() => {
        setNewText(currentTask.text)
    }, [currentTask])

    function handleChange(e: any) {
        setNewText(e.target.value)
        dispatch(setCurrentTask({...currentTask, text: e.target.value}))
    }

    //TODO: update text ith current task

    return (
        <>
            <Tiptap />
        </>
    )
}