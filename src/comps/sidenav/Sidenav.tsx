import {useState, useEffect} from 'react'
import './Sidenav.css'
import Log from '../../App'
import { setCurrentTask } from '../../features/currentTask/currentTaskSlice.tsx'
import { useAppSelector, useAppDispatch } from '../../app/hooks.ts'

export interface Log {
    id: string,
    title: string
    undertitle: string
    text: string
    user_id: string
}

export default function Sidenav({logs}: {logs: Log[]}) {

    const dispatch = useAppDispatch()
    const currentTask = useAppSelector(state => state.currentTask)
    const [open, setOpen] = useState(true)

    async function updateCurrentTask(log ?: Log) {
        dispatch(setCurrentTask(log))
    }

    // function openNav() {
    //     setOpen(!open)
    //     console.log(open)
    // }

    //TODO: order by date
    const orderedLogs = logs.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime())


    return (
        <div className={open ? 'sidenav open' : 'sidenav closed'}>
            <div />
            <div className={open ? 'sidenav-content open' : 'sidenav-content'}>
                {/* <div className='sidenav-header'>
                    <button onClick={() => openNav()}>X</button>
                </div> */}
                <div className='sidenav-body'>
                    {orderedLogs && logs.length > 0 ? 
                        logs.map((log) => 
                            <div key={log.id} onClick={() => updateCurrentTask(log)}>
                                <div className='object-log'>
                                    <p className='object-log-title'>{log.title}</p>
                                    <p className='object-log-undertitle'>{log.undertitle}</p>
                                </div>
                            </div>) 
                            : 
                            <div>No logs yet</div>
                    }
                    <button onClick={() => dispatch(setCurrentTask({ id: '', title: '', undertitle: '', text: ''}))}>Create a new Log</button>
                </div>
            </div>
        </div>
    )
}


