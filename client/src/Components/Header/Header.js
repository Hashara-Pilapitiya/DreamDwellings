import React, { useState } from 'react';
import './Header.css';
import Logo from '../../Assets/Logos/logo01.png';
import { HiMenu } from "react-icons/hi";
import OutsideClickHandler from 'react-outside-click-handler';
import useHeaderColor from '../../Hooks/useHeaderColor';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';


const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0();

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && '-100%'}
    }
  }

  return (
    <section className='h-wrapper' style={{ background: headerColor}}>
        <div className='flexCenter paddings innerWidth h-container'>

          <Link to='/'>

            <div className='h-logo'>

              <div className='logo'>

                  <img src={Logo} alt='logo' width={100} />

              </div>

              <div className='logo-name'>

                  <h3><span>D</span>ream<span>D</span>wellings</h3>

              </div>

            </div>

            </Link>

            <OutsideClickHandler onOutsideClick={() => {
              setMenuOpened(false);
            }}> 

            <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>

                <NavLink to='/properties'>Properties</NavLink>

                <a href='hasharanethmi2020@gmail.com'>Contact</a>

                {/* login button */}
                {!isAuthenticated ? (
                  <button className='button' onClick={loginWithRedirect}>
                  Login
                </button>
                ) : (
                  <ProfileMenu user={user} logout={logout} />
                )
                }
              

            </div>

            </OutsideClickHandler>

            <div className='menu-icon'  onClick={() => setMenuOpened ((prev)=>!prev)}>
                <HiMenu size={30}/>
            </div>

        </div>

      </section>
  )
}

export default Header;