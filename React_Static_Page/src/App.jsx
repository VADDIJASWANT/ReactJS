import { useState } from 'react'
import NavBar from 'React_Static_Page/src/Components/NavBar.jsx'
import Main from 'React_Static_Page/src/Components/MainComponent.jsx'
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
