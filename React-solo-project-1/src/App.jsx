import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from "./components/info.jsx"
import About from "./components/about.jsx"
import Intrests from "./components/intrests.jsx"
import Footer from "./components/footer.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Info />
      <About />
      <Intrests />
      <Footer />
    </div>
  )
}

export default App
