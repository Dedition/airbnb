import { useDispatch } from 'react-redux';
import { demoUserLogin } from "../../store/session";

const DemoUserLogin = () => {
    const dispatch = useDispatch();
    return (
        <button className=' nav-link demo-login' onClick={() => dispatch(demoUserLogin())}>Demo Login</button>
    )
};

export default DemoUserLogin;
