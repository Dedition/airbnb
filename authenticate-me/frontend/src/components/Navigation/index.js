import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
// import Header from './Header';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='profile-button'>
                <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <div className='sign-up'>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        );
    }

    return (
        <div className='header'>
            <img className='header_icon' src={process.env.PUBLIC_URL + `/images/svgexport-1.png`} alt="" />
            <div className='header_center'>
                <input type="text" />
                <i className="fa-solid fa-magnifying-glass" />
            </div>
            <ul>
                <div className='header-right'>
                    <a href="" className='header_right_text'>Become A Host</a>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                        {isLoaded && sessionLinks}
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Navigation;
//                 <i className="fa-solid fa-globe" />
//                 <i className='fa-solid fa-bars' />
//                 <i className="fa-solid fa-user-circle" />
//             </div>
//         </div >
//     )
