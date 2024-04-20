import {useState, useEffect} from 'react'
import './Sidenav.css'
export default function Sidenav() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [open])

    return (
        <div className='sidenav-container'>
            <div className={open ? 'sidenav open' : 'sidenav'} onClick={() => setOpen(false)} />
            <div className={open ? 'sidenav-content open' : 'sidenav-content'} onClick={() => setOpen(false)}>
                <div className='sidenav-header'>
                    <button onClick={() => setOpen(!open)}>X</button>
                </div>
                <div className='sidenav-body'>
                    Text here
                </div>
            </div>
        </div>
    )
}


