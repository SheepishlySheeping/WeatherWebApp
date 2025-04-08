import { useEffect, useState } from 'react'
import './nav.css'
import { useLoadingStore, useSearchStore, useThemeStore, useUnitStore, useTimeStore } from '../../store/useStores'
import { getTimeString } from '../../utils/timeConfig'
import switchTheme from '../../utils/themeConfig'
import switchUnit from '../../utils/unitConfig'
import useFetchSuggestions from '../../services/useFetchSuggestions'
import useFetchWeatherData from '../../services/useFetchWeatherData'
import useFetchForecastData from '../../services/useFetchForecast'


export default function Navbar() {
    const { theme, switching } = useThemeStore()
    const { loading } = useLoadingStore()
    const { useFahrenheit } = useUnitStore()
    const { curTime } =useTimeStore()
    const { focus, selected, setFocus, setSelected, setPrev } = useSearchStore()

    const [searchInput, setSearchInput] = useState("")

    const { data: locations = [] } = useFetchSuggestions(searchInput);
    const { mutate: fetchWeather } = useFetchWeatherData();
    const { mutate: fetchForecast } = useFetchForecastData();

    const { lat, lon } = selected;
    useEffect(() => {
        fetchWeather({ lat, lon })
        fetchForecast({ lat, lon })
    }, [])

    return (
        <div className='Navbar'>
            <div className='SearchContainer Border'>
                <div className='SearchBar'>
                    <input
                        type='text'
                        placeholder='Enter city or region'
                        value={searchInput}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setTimeout(() => setFocus(false), 150)}
                        onChange={(element) => {
                            setSearchInput(element.target.value)

                        }}
                    />
                    {(searchInput) && (
                        <button onClick={() => setSearchInput("")} />
                    )}
                </div>
                <button 
                    className='SearchButton'
                    onClick={() => {
                        setSearchInput(`${selected.name}, ${selected.country}`)
                        fetchWeather({lat: selected.lat, lon: selected.lon})
                        fetchForecast({lat: selected.lat, lon: selected.lon})
                        setPrev(selected)
                    }}   
                    disabled={loading} 
                />
                {(focus) && (<div className='SearchOptions Border' >
                    {locations.map((location, index) => (
                        <button 
                            className='Option Border' 
                            key={`${location.name}-${location.country}-${index}`}
                            onClick={() => {
                                setSearchInput(`${location.name}, ${location.country}`)
                                setSelected(location)
                            }}
                        >
                            {location.name}, {location.country}
                        </button>
                    ))}
                </div>)}
            </div>
            <div>
                <div className='TimeContainer Border'>
                    <p>Local time: {getTimeString(curTime)}</p>
                </div>
                <button 
                    className='SliderChanger UnitChanger Border' 
                    onClick={() => {switchUnit()}} 
                    disabled={loading} 
                >
                    <div style={{backgroundColor:"gray", left: (useFahrenheit) ? "50%" : "-25%" }} />
                </button>
                <button 
                    className='SliderChanger ThemeChanger Border' 
                    onClick={() => {switchTheme()}} 
                    disabled={switching} 
                >
                    <div style={{backgroundColor:"gray", left: (theme === 'dark') ? "50%" : "-25%" }} />
                </button>
            </div>
        </div>
    );
}