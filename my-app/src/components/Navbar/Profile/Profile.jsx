import s from "./Profile.module.css"
import Login from "../Login/Login";
let Profile = () => {
    return (
        <div className={s.profile}>
            <Login />
            <div>
                <img src="https://i.pinimg.com/474x/88/38/dd/8838ddc90e00c1c7b4da8b24af7af8d6.jpg" alt=""/>
            </div>
            <div>
                NOC Дежурный
            </div>
            <div>
                NOC@telservice.kz
            </div>
        </div>
    )
}
export default Profile;