import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import './NavMenu.css';

const NavMenu = () => {
    const [opacity, setOpacity] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setOpacity(true)
        } else {
            setOpacity(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    let cssClass = opacity ? 'navMenu__White' : 'navMenu';
    return (
        <div id={`${cssClass}`}>
            <NavBar />
        </div>
    )
}

export default NavMenu