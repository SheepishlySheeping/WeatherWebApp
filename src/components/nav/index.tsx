import { useState } from 'react';
import './nav.css';

export default function Navbar() {

    const [searchInput, setSearchInput] = useState("");

    return (
        <div className='Navbar'>
            <div className='SearchContainer'>
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
            <div className='TimeContainer'>

            </div>
            <div style={{ flex: "2", border: "none" }}></div>
        </div>
    );
}