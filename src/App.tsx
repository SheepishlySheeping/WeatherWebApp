import './styles/App.css'
import Navbar from './components/nav'
import Table from './components/table'
import Forecast from './components/forecast'

function App() {

  return (
    <>
      <div className='ThemeOverlay' />
      <Navbar />
      <Table />
      <Forecast />
    </>
  )
}

export default App
