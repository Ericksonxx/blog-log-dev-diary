import { useEffect } from 'react'
import './App.css'

//import components
import Title from './comps/title/Title.tsx' 
import Undertitle from './comps/undertitle/Undertitle.tsx'
import Text from './comps/text/Text.tsx'
import Timer from './comps/timer/Timer.tsx'
import Sidenav from './comps/sidenav/Sidenav.tsx'
import supabase from './utils/supabase'


//redux
import { useAppSelector, useAppDispatch } from './app/hooks'
import { getUser } from './features/auth/authSlice.tsx'

function AppHome() {
  //redux access
  const task = useAppSelector(state => state)
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch() 

  //load all logs when app loads
  useEffect(() => {
    readLogs()
    console.log(user.id)
  }, [])

  console.log(task)

  async function readLogs() {
    let { data: logs, error } = await supabase
    .from('logs')
    .select('*')

    if(error) {
      console.log(error)
    } else {
      console.log(logs)
    }
  }

  //TODO: split this code into separate functions

  async function saveLog() {
    const { data, error } = await supabase
    .from('logs')
    .insert([
      { title: task.task.title, undertitle: task.task.undertitle, text: task.task.text, user_id: task.user.id },
    ])
    .select()
    if(error) {
      console.log(error)
    } else {
      console.log(data)
      readLogs()
    }
  }

  return (
    <>
      <Sidenav />
      <div>
        <Timer />
        <Title />
        <Undertitle />
        <Text />
        <div>
          <button onClick={() => saveLog()}>SAVE</button>
        </div>
      </div>
    </>
  )
}

export default AppHome
