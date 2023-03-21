import Tickets from "./Tickets/Tickets";
import TicketsInfo from "./Tickets/TicketsInfo/TicketsInfo";
import AddTickets from "./Tickets/AddTickets/AddTickets";
import s from "./content.module.css"
import {Divider} from "@mui/material";
import DataTableTickets from "./Tickets/dataTable/DataTable";
import { Navigate } from "react-router-dom";
import {useAuth} from "../../hook/use-auth";
import {removeUser} from "../../redux/user-reducer";
import {useDispatch} from "react-redux";

let Content = () => {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth()
    return isAuth ? (
        <div className={s.content}>

            <div className={s.addTickets}><AddTickets/></div>
            <Divider variant="fullWidth" sx={{margin: 5}}/>
            <div>
                {/*<Tickets/> {"Первая версия нативная"}*/}
                <DataTableTickets/>
                <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
            </div>
        </div>
    ) : (
        <Navigate to={"/login"} replace={true}/>
    )
}

export default Content;