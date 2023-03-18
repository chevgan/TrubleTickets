import Tickets from "./Tickets/Tickets";
import TicketsInfo from "./Tickets/TicketsInfo/TicketsInfo";
import AddTickets from "./Tickets/AddTickets/AddTickets";
import s from "./content.module.css"
import {Divider} from "@mui/material";
import DataTableTickets from "./Tickets/dataTable/DataTable";

let Content = () => {
    return (
        <div className={s.content}>
            <div className={s.addTickets}><AddTickets/></div>
            <Divider variant="fullWidth" sx={{margin: 5}}/>
            <div>
                <DataTableTickets/>
            </div>
        </div>
    )
}

export default Content;