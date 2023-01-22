import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Navbar from './Components/Navbar'
import Places from './Components/Places'
import data from './data'
function App() {
  let place = data.map(item => {
    return(
      <Places
          item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className='All-Places'>
        {place}
      </section>

    </div>
  )
}

export default App
