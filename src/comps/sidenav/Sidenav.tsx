import {useState, useEffect} from 'react'
import './Sidenav.css'
import supabase from '../../utils/supabase'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logIn, logOut, getUser } from '../../features/auth/authSlice'


export default function Sidenav() {
    const [open, setOpen] = useState(false)

    const logs = useAppSelector(state => state)
    const dispatch = useAppDispatch() 

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [open])

    //if logs....



    return (
        <div className='sidenav-container'>
            <div className={open ? 'sidenav open' : 'sidenav'} onClick={() => setOpen(false)} />
            <div className={open ? 'sidenav-content open' : 'sidenav-content'} onClick={() => setOpen(false)}>
                <div className='sidenav-header'>
                    <button onClick={() => setOpen(!open)}>X</button>
                </div>
                <div className='sidenav-body'>
                    {}
                </div>
            </div>
        </div>
    )
}


