import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setText } from '../../features/counter/counterSlice'
import './Text.css'


export default function Title() {
    const task = useAppSelector(state => state)
    const dispatch = useAppDispatch()       

    return (
        <>
            <div className='text'>
                <textarea placeholder={task.task.text} onChange={(e) => dispatch(setText(e.target.value))} />
            </div>
        </>
    )
}