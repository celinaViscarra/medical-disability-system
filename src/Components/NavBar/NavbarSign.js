import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function NavbarSign() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*
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

  window.addEventListener('resize', showButton); */
        return (
            <>
              <nav className='navbar'>
                <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    FOCUS
                    <i class='fab fa-react' />
                  </Link>
                  <div className='d-flex justify-content-between'>
                  <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                      <Link
                        to='/login'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                        Log In
                      </Link>
                    </li>
                    </ul>
                  </ul>
                  </div>
                </div>
              </nav>
            </>
          );
    
    }

export default NavbarSign;