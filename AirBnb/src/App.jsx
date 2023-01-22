import './App.css'
import Navbar from "./Components/Navbar.jsx"
import Hero from "./Components/Hero.jsx"
import Card from "./Components/card.jsx"
import data from "./data"
export default function App() {
  const dataarray = data.map( e => {
    return(<Card 
      key={e.id}
      item={e}
      />)
  })
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className="cards-list">
        {dataarray}
        </section>
        
    </div>
  )
}

