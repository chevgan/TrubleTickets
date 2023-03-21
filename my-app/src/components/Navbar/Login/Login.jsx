import s from "./Login.module.css"
import {useAuth} from "../../../hook/use-auth";
import {removeUser} from "../../../redux/user-reducer";
import {useDispatch} from "react-redux";
let Login = () => {
    const {isAuth, email} = useAuth()
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(removeUser());
    };
        return (
                <div className={s.login}>
                    <div>
                        <button onClick={handleLogout}>Выйти с  {email}</button>
                    </div>
                </div>
        )
}
export default Login;