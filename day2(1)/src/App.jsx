import { useState } from 'react'
import List from './List'
import Form from './Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List />
      <Form />
    </>
  )
}

export default App
