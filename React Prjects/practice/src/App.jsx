import { Fragment, useState } from 'react'
import practice from './Components/practice'
import './App.css'

function App() {
  const [count, setCount] = useState('0')

  return (
    <Fragment>
      <practice/>
    </Fragment>
  )
}

export default App
