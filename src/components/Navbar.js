import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <div className='navbar'>
        <div className={navbar ? 'navbar-container-active' : 'navbar-container'}>
          <Link to='/' className={navbar ? 'navbar-logo-active' : 'navbar-logo'} onClick={closeMobileMenu}>
              cjdc
            </Link>
          <div className={navbar ? 'menu-icon-active' : 'menu-icon'} onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
              <Link to='/' className={navbar ? 'nav-links-active' : 'nav-links'} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className={navbar ? 'nav-links-active' : 'nav-links'}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className={navbar ? 'nav-links-active' : 'nav-links'}
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className={navbar ? 'nav-links-active' : 'nav-links'}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </>
  );
};
