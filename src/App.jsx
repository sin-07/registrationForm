import { useState } from 'react'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage/>
    <Login/>
    <Signup/>
    </>
  )
}

export default App
