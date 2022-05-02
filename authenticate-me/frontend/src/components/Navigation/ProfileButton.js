import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showList, setShowList] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const openList = () => {
        if (showList) return;
        setShowList(true);
    }

    useEffect(() => {
        if (!showList) return;

        const closeList = () => {
            setShowList(false);
        }

        document.addEventListener('click', closeList);

        return () => document.removeEventListener("click", closeList);
    }, [showList]);


    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div className="profile_button">
                <i className="fa-solid fa-user-circle" onClick={openList} />
                {showList && (
                    <div className="profile_menu">
                        <div className="profile_menu_body"></div>
                        <ul className="profile_dropdown">
                            <li a href="">My Listings</li>
                            <li a href="">My Bookings</li>
                            <li a href="">My Trips</li>
                            <li a href="">Account Settings</li>
                        </ul>
                    </div>
                )}
                {showMenu && (
                    <div className="profile_menu">
                        <div className="profile_menu_header">
                            <img src={user.image} alt="" />
                            <h3>{user.name}</h3>
                        </div>
                        <div className="profile_menu_footer">
                            <a href="" onClick={logout}>Logout</a>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={openMenu}>
                <i className='fa-solid fa-bars' />
            </button>

            {showMenu && (
                <ul className="profile_dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
