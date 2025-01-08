import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'

import { usersObj } from './data/userData'

// APP:

// Props:
// State: Users{}

function App() {
  const [users, setUsers] = useState(usersObj)


  return (
    <>
      <Header />
      <Question users={users}/>
    </>
  )
}

export default App
