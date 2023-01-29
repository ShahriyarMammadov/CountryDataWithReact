import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import './index.scss'

const Header = () => {

    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <div>
                <header>
                    <div className="logo">
                        <h1>Where in the world?</h1>
                    </div>
                    <div className="darkMode">
                        <button onClick={toggleTheme}> <i className="fa-regular fa-moon"></i> Dark Mode</button>
                    </div>
                </header>
            </div>
        </div>
    );


}

export default Header