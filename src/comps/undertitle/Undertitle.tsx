import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setUndertitle } from '../../features/counter/counterSlice'
import './Undertitle.css'


export default function Title() {
    const task = useAppSelector(state => state)
    const dispatch = useAppDispatch()       

    return (
        <>
            <div className='undertitle'>
                <input placeholder={task.task.undertitle} onChange={(e) => dispatch(setUndertitle(e.target.value))} />
            </div>
        </>
    )
}