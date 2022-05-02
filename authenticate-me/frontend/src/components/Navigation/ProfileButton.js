import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Header from "../Header/Header";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

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

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div className="profile-button">
                <i className="fa-solid fa-user-circle" onClick={openMenu} />

                {showMenu && (
                    <div className="profile-menu">
                        <div className="profile-menu-header">
                            <img src={user.image} alt="" />
                            <h3>{user.name}</h3>
                        </div>
                        <div className="profile-menu-body">
                            <ul className="profile_dropdown">
                                <li a href="">My Listings</li>
                                <li a href="">My Bookings</li>
                                <li a href="">My Trips</li>
                                <li a href="">Account Settings</li>
                            </ul>
                        </div>
                        <div className="profile-menu-footer">
                            <a href="" onClick={logout}>Logout</a>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={openMenu}>
                <i className='fa-solid fa-bars' />
            </button>

            {showMenu && (
                <ul className="profile-dropdown">
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
