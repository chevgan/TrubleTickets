import Tickets from "./Tickets/Tickets";
import TicketsInfo from "./Tickets/TicketsInfo/TicketsInfo";
import AddTickets from "./Tickets/AddTickets/AddTickets";
import s from "./content.module.css"
import MyForm from "./Tickets/AddTicketTwo/AddTicktTwo";
let Content = () => {
    return (
        <div className={s.content}>
            <TicketsInfo/>
            <Tickets />
            <AddTickets/>
        </div>
    )

}

export default Content;