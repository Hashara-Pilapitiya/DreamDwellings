import React, { useState } from 'react';
import './ProfileMenu.css';

const ProfileMenu = ({user, logout}) => {

    const Menus = ['Bookings'];  

    const [open, setOpen] = React.useState(false);

    const menuRef = React.useRef();
    const nameRef = React.useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== nameRef.current) {
            setOpen(false);
        }
    });

  return (

    <div className='profile'>
            <h4 ref={nameRef} onClick={() => setOpen(!open)}>{user?.name}</h4>

            { open && <div className='profile-menu' ref={menuRef}>
                <ul>
                    {Menus.map((menu) => (
                        <li key={menu} onClick={() => setOpen(false)}>{menu}</li>
                    ))}

                    <li onClick={() => {localStorage.clear(); logout(); setOpen(false)}}>Logout</li>
                </ul>
               
            </div> }
            
           
    </div>

  )
}

export default ProfileMenu;