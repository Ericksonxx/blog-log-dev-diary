import {useState, useEffect} from 'react'
import supabase from '../../utils/supabase'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logIn, logOut, getUser } from '../../features/auth/authSlice'

import { useNavigate } from 'react-router-dom'


export default function Auth() {

    const navigate = useNavigate()

    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch() 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //check for user
    async function checkUser() {
        const { data: { user } } = await supabase.auth.getUser()
            if(user) {
                dispatch(getUser(user.id))
            } else {
                getUser('')
            }
    }
    
    useEffect(() => {
        checkUser()
        if(user.logged === false) {
            console.log('no user')
        } else {
            console.log(user.id)
        }
    },[])


    //handle login
    async function handleLogin() {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if(error) {
            console.log(error)
        } else if (data){
            getUser(data?.user?.id)
            console.log(user.id)
        }
    }

    if(user.logged === false) {
        console.log(user)
    }

    return(
        <>
            {user.id === '' ? (
                <div>
                    <h1>Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h1>You are logged in</h1>
                    <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                    <br/>
                    <button onClick={() => dispatch(logOut())}>Logout</button>
                </div>
            )}
        </>
    )
}