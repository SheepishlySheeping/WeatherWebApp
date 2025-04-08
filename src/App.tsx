import './styles/App.css'
import Navbar from './components/nav'
import Table from './components/table'
import Forecast from './components/forecast'

import { useThemeStore } from './store/useStores'
import { useTimeStore } from './store/useStores'
import { useEffect } from 'react'

function App() {

  const theme = useThemeStore((state) => state.theme)
  const setCurTime = useTimeStore((state) => state.setCurTime)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurTime(new Date());
    }, 1000 * 60)
    
    return () => clearInterval(interval)
  }, []);  

    return (
      <>
        <div className={`ThemeOverlay ${theme === 'dark' ? 'active' : ''}`} />
        <Navbar />
        <Table />
        <Forecast />
      </>
    )
  }

export default App
