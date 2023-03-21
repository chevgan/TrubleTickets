import { useSelector } from "react-redux";

export const useAuth = () => {
    debugger
    const user = useSelector(state => state.user);
    const {email, token, id} = useSelector(state => state.user);
    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}