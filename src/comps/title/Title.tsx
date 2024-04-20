import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setTitle } from '../../features/counter/counterSlice'
import './Title.css'


export default function Title() {
    const task = useAppSelector(state => state)
    const dispatch = useAppDispatch()       

    return (
        <>
            <div className='title'>
                <input placeholder={task.task.title} onChange={(e) => dispatch(setTitle(e.target.value))} />
            </div>
        </>
    )
}