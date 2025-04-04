import { use, useState } from 'react';
import './nav.css';

export default function Navbar() {

    const [searchInput, setSearchInput] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);

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
                <div className='ThemeChangeContainer Border'>
                    <button onClick={() => (darkTheme) ? setDarkTheme(false) : setDarkTheme(true)} style={{backgroundColor:"gray", left: (darkTheme) ? "50%" : "-25%" }} />
                </div>
            </div>
        </div>
    );
}