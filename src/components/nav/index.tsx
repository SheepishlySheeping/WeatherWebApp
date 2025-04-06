import { use, useState } from 'react';
import './nav.css';
import switchTheme from '../../composables/switchTheme';
import { useThemeStore } from '../../store/store';

export default function Navbar() {

    const theme = useThemeStore((state) => state.theme);
    const switching = useThemeStore((state) => state.switching)

    const [searchInput, setSearchInput] = useState("");
    const [useFahrenheit , setUseFahrenheit] = useState(false);

    return (
        <div className='Navbar'>
            <div className='SearchContainer Border'>
                <div className='SearchBar'>
                    <input
                        type='text'
                        placeholder='Enter city or region'
                        value={searchInput}
                        onChange={(element) => setSearchInput(element.target.value)}
                    />
                    {(searchInput) && (
                        <button onClick={() => setSearchInput("")} />
                    )}
                </div>
                <button className='SearchButton' />
            </div>
            <div>
                <div className='TimeContainer Border'>
                    <p>curtime</p>
                </div>
                <button className='SliderChanger UnitChanger Border' onClick={() => (useFahrenheit) ? setUseFahrenheit(false) : setUseFahrenheit(true)} >
                    <div style={{backgroundColor:"gray", left: (useFahrenheit) ? "50%" : "-25%" }} />
                </button>
                <button className='SliderChanger ThemeChanger Border' onClick={switchTheme} disabled={switching} >
                    <div style={{backgroundColor:"gray", left: (theme === 'dark') ? "50%" : "-25%" }} />
                </button>
            </div>
        </div>
    );
}