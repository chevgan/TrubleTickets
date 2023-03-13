import style from "./Navbar.module.css"
import Profile from "./Profile/Profile";
let Navbar = () => {
    return (
        <div className={style.navbar}>
            <div>
                <Profile/>
            </div>
        </div>
    )
}

export default Navbar;