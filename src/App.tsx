import { useEffect, useState } from 'react'
import './App.css'

//import components
import Title from './comps/title/Title.tsx' 
import Undertitle from './comps/undertitle/Undertitle.tsx'
import Text from './comps/text/Text.tsx'
import Timer from './comps/timer/Timer.tsx'
import Sidenav from './comps/sidenav/Sidenav.tsx'
import supabase from './utils/supabase'


//redux
import { useAppDispatch, useAppSelector } from './app/hooks'
import { getUser } from './features/auth/authSlice'
export interface Log {
  id: string,
  title: string
  undertitle: string
  text: string
  user_id: string
}

function AppHome() {
  
  //redux access
  const task = useAppSelector(state => state.task)
  const currentTask = useAppSelector(state => state.currentTask)
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  //get user 
  useEffect(() => {
    checkUser()
  })
  
  async function checkUser() {  
    const { data: { user } } = await supabase.auth.getUser()
    if(user?.id !== null) {
        dispatch(getUser(user))
        readLogs({userId: user?.id})
    }
  }
  
  const [logs, setLogs] = useState<Log[]>([])


  async function readLogs({userId}: {userId: string | undefined}) {
    let { data: logs, error } = await supabase
    .from('logs')
    .select('*')
    .eq('user_id', userId)

    if(error) {
      console.log(error)
    } else {
      setLogs(logs as Log[])
    }
  }

  //TODO: split this code into separate functions

  async function saveLog() {
    const { data, error } = await supabase
    .from('logs')
    .insert([
      { title: task.title, undertitle: task.undertitle, text: task.text, user_id: user.id },
    ])
    .select()
    if(error) {
      console.log(error)
    } else {
      readLogs({userId: user.id})
    }
  }

  async function updateLog() {
    const { data, error } = await supabase
    .from('logs')
    .update({ title: currentTask.title, undertitle: currentTask.undertitle, text: currentTask.text })
    .eq('id', currentTask.id)
    .select()
    if(error) {
      console.log(error)
    } else {
      console.log(data)
      readLogs({userId: user.id})
    }
  }

  //TODO: add delete function
  //TODO: add update/create restrictions

  
  return (
    <>
      <Sidenav logs={logs} />
      <div className='main-screen'>
        <Timer />
        <Title />
        <Undertitle />
        <Text />
        <div>
          {currentTask.id === '' ?
            <button onClick={() => saveLog()}>SAVE</button>
            :
            <button onClick={() => updateLog()}>UPDATE</button>
        }
        </div>
      </div>
    </>
  )
}

export default AppHome
