import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick =()=> setClick(!click);
    const closeMobileMenu = () => setClick(!false)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"/>
                    </Link>
                    <div className="manu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                </div>
                <ul className={click ? 'nav-menu active': 'nav menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link' onClick={closeMobileMenu}>
                            Principal
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/services" className='nav-link' onClick={closeMobileMenu}>
                            Servicios
                        </Link>
                        <li className='nav-item'>
                        <Link to="/products" className='nav-link' onClick={closeMobileMenu}>
                            Productos
                        </Link>
                        <li className='nav-item'>
                        <Link to="/sing-up" className='nav-link' onClick={closeMobileMenu}>
                            Registrarse
                        </Link>
                    </li>
                    </li>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
