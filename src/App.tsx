import './App.css'
import Title from './comps/title/Title.tsx' 
import Undertitle from './comps/undertitle/Undertitle.tsx'
import Text from './comps/text/Text.tsx'
import Timer from './comps/timer/Timer.tsx'
import Sidenav from './comps/sidenav/Sidenav.tsx'
import { useAppDispatch, useAppSelector } from './app/hooks'

function App() {

  const timer = useAppSelector(state => state)
  const dispatch = useAppDispatch()



  return (
    <>
      <Sidenav />
      <div>
        <Timer />
        <Title />
        <Undertitle />
        <Text />
        <div>
          <button>SAVE</button>
        </div>
      </div>
    </>
  )
}

export default App
