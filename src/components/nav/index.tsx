import { use, useEffect, useState } from 'react';
import './nav.css';
import { useLoadingStore, useSearchStore, useThemeStore, useUnitStore } from '../../store/store';
import switchTheme from '../../composables/switchTheme';
import switchUnit from '../../composables/switchUnit';
import getSuggestions from '../../services/getSuggestions';

export default function Navbar() {
    const theme = useThemeStore((state) => state.theme)
    const switching = useThemeStore((state) => state.switching)
    const loading = useLoadingStore((state) => state.loading)
    const useFahrenheit = useUnitStore((state) => state.useFahrenheit)
    const { focus, setFocus } = useSearchStore()

    const [searchInput, setSearchInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(searchInput)}, 300)

        return () => {
            clearTimeout(handler)
        }
        }, [searchInput])

    const { data: locations = [] } = getSuggestions(debouncedInput);

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
                <button className='SearchButton' />
                {(focus) && (<div className='SearchOptions Border' >
                    {locations.map((location, index) => (
                        <button className='Option Border' key={index}>{location.name}, {location.country}</button>
                    ))}
                </div>)}
            </div>
            <div>
                <div className='TimeContainer Border'>
                    <p>curtime</p>
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