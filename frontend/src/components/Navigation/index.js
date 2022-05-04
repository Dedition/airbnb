import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SpotFormModal from '../SpotsPage/SpotModal';
import './Navigation.css';
import DemoUserLogin from '../LoginFormModal/DemoUser';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [navStatus, setNavStatus] = useState('nav-top');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setNavStatus((window.scrollY > 0) ? 'nav-not-top' : 'nav-top')
        })
    }, [])

    // const logout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    //     return history.replace('/');
    //   };


    let sessionLinks = sessionUser ? (
        <>
            <SpotFormModal />
            <div></div>
            <NavLink to='/profile' className='nav-link'>My Profile</NavLink>
            <div></div>
            <button className='nav-link' onClick={() => dispatch(sessionActions.logout())}>Logout</button>
        </>
    ) : (
        <div>
            <DemoUserLogin />
            <div></div>
            <LoginFormModal />
            <div></div>
            <NavLink to='/signup' className='nav-link'>Sign Up</NavLink>
            <div></div>
        </div>
    )


    return (
        <div className={`nav-bar ${navStatus}`}>
            <div className='nav-bar-left'>
                <NavLink className='row-list' exact to="/">
                    <img className='logo' src='https://i.imgur.com/XqQZQZL.png' alt='logo' />
                    Airbnb
                </NavLink>
            </div>

            <div className='nav-bar-mid'>
                {navStatus === 'nav-top' ? (
                    <>
                        <NavLink className='nav-link' exact to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/listings">Listings</NavLink>
                        <NavLink className='nav-link' to="/add-spot">Add Spot</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink className='nav-link' exact to="/">Home</NavLink>
                    </>
                )}
            </div>
            <div className='nav-bar-right'>
                {sessionLinks}
            </div>
        </div>
    )
}

// if (sessionUser) {
//     sessionLinks = (
//         <div className='profile-button'>
//             <ProfileButton user={sessionUser} />
//         </div>
//     );
// } else {
//     sessionLinks = (
//         <div className='sign-up'>
//             <LoginFormModal />
//             <NavLink to="/signup">Sign Up</NavLink>
//         </div>
//     );
// }

//     return (
//         <div className='header'>
//             <Link to="/">
//                 <img className='header_icon' src={process.env.PUBLIC_URL + `/images/svgexport-1.png`} alt=""
//                 />
//             </Link>
//             <div className='header_center'>
//                 <input type="text" />
//                 <i className="fa-solid fa-magnifying-glass" />
//             </div>
//             <ul>
//                 <div className='header-right'>
//                     {!sessionUser && (
//                         <div className='sign-up'>
//                             <a href="/signup" className='header_right_text'>Become A Host</a>
//                             <LoginFormModal />
//                             <NavLink to="/signup">Sign Up</NavLink>
//                         </div>
//                     )}
//                     <li>
//                         <NavLink exact to="/">Home</NavLink>
//                         {isLoaded && sessionLinks}
//                     </li>
//                 </div>
//             </ul>
//         </div>
//     );
// }

export default Navigation;
