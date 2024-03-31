import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BACKEND_URL } from '@repo/common/config'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><p>{BACKEND_URL}</p></div>
    </>
  )
}

export default App
