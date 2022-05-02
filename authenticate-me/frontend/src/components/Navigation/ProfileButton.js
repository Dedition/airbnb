import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link, NavLink, useHistory } from "react-router-dom";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
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

        history.push('/welcome');
    };

    return (
        <>
            <div className="profile_button">
                <i className="fa-solid fa-user-circle" onClick={openList} />
                {showList && (
                    <div className="profile_menu">
                        <div className="profile_menu_body"></div>
                        <ul className="profile_dropdown">
                            <NavLink to="/listings">My Listings</NavLink>
                            <NavLink to="/bookings">My Bookings</NavLink>
                            <NavLink to="/trips">My Trips</NavLink>
                            <NavLink to="/profile">Account Settings</NavLink>
                        </ul>
                    </div>
                )}
                {showMenu && (
                    <div className="profile_menu">
                        <div className="profile_menu_header">
                            <img src={user.image} alt="" />
                            <h3>{user.name}</h3>
                        </div>
                        {/* <div className="profile_menu_footer">
                            <a href="/welcome" onClick={logout}>Logout</a>
                        </div> */}
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
