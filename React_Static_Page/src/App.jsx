import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Main from './components/MainComponent.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <NavBar />
          <Main />
    </div>
  )
}

export default App
