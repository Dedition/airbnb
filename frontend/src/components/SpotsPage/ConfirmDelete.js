import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const ConfirmDelete = () => {
    const userId = useSelector(state => state.session.user.id);

    return (
        <div>
            <div>This has been successfully deleted</div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to={`/users/${userId}`}>My Page</NavLink>
        </div>
    )
}


export default ConfirmDelete;
