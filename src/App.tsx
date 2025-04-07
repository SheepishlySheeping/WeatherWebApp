import './styles/App.css'
import Navbar from './components/nav'
import Table from './components/table'
import Forecast from './components/forecast'

import { useThemeStore } from './store/store'

function App() {

  const theme = useThemeStore((state) => state.theme)

  return (
    <>
      <div className='ThemeOverlay' style={{opacity: (theme === 'light') ? 0 : 1  }}/>
      <Navbar />
      <Table />
      <Forecast />
    </>
  )
}

export default App
