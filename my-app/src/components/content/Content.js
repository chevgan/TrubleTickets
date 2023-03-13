import Tickets from "./Tickets/Tickets";
import TicketsInfo from "./Tickets/TicketsInfo/TicketsInfo";
import AddTickets from "./Tickets/AddTickets/AddTickets";
import s from "./content.module.css"
import {Divider} from "@mui/material";

let Content = () => {
    return (
        <div>
            <div className={s.addTickets}><AddTickets/></div>
            <Divider variant="fullWidth" sx={{margin: 5}}/>
            <div className={s.content}>
                <TicketsInfo/>
                <Tickets/>
            </div>
        </div>
    )

}

export default Content;