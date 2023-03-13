import Tickets from "./Tickets/Tickets";
import TicketsInfo from "./Tickets/TicketsInfo/TicketsInfo";
import AddTickets from "./Tickets/AddTickets/AddTickets";

let Content = () => {
    return (
        <div>
            <TicketsInfo/>
            <Tickets />
            <AddTickets/>
        </div>
    )

}

export default Content;