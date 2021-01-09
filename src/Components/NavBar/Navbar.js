import React, { Component } from 'react';
import './Navbar.scss'
import {MenuItems} from "./MenuItems"; 
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Button} from '../NavBar/Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
        return (
            <>
              <nav className='navbar'>
                <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    FOCUS
                    <i class='fab fa-react' />
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/employees'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                        Employees
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/med'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                        Medical Disabilities
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/users'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                        Users
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/signup'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </>
          );
    
    }

export default Navbar;
        