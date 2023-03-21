import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from './Form';
import { loginUser } from '../../../redux/user-reducer';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(loginUser(user.email, user.uid, user.accessToken));
                console.log(`Успешная авторизация ${user.email}`);
                navigate('/');
            })
            .catch(() => console.log("че то погшло не так"));
    };

    return <Form title="sign in" handleClick={handleLogin} />;
};
export default Login;