import React, {useState, useEffect} from 'react';

import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import s from "./Tickets.module.css"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import moment from "moment-timezone";
import {Button} from "@mui/material";


class IconButton extends React.Component {
    render() {
        return null
    }
}
const kzTime = moment().tz('Asia/Almaty');


const Tickets = () => {
    const dispatch = useDispatch()
    const ticketsReducer = useSelector(state => state.ticketsReducer.ticket)

    const [openTicket, setOpenTicket] = useState(null);
    const handleTicketClick = (ticketId) => {
        if (ticketId === openTicket) {
            setOpenTicket(null);
        } else {
            setOpenTicket(ticketId);
        }
    };


    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            {ticketsReducer.map(ticketsReducer =>
                <Box sx={{flexGrow: 1}}>
                    <Grid sx={{marginTop: 0}} item p={1} container spacing={2} className={openTicket === ticketsReducer.numberTickets ? s.openTicket : s.ticket}>
                        <Grid item xs={1} >
                            <Item>{ticketsReducer.numberTickets}</Item>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Item>{ticketsReducer.siteName}</Item>
                        </Grid>
                        <Grid item xs={1}>
                            <Item>
                                {ticketsReducer.clientName}
                            </Item>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Item>{ticketsReducer.ticketData}</Item>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Item>{ticketsReducer.downTime}</Item>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Item>{ticketsReducer.employeeName}</Item>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Item>{ticketsReducer.responsiblePerson}</Item>
                        </Grid>
                        <Grid item xs={1}>
                            <Item>
                                <button> статус</button>
                            </Item>
                        </Grid>
                        <Grid item xs={0.6}>
                            <Item>
                                <Button sx={{padding: 0, minWidth: 0}}  onClick={() => handleTicketClick(ticketsReducer.numberTickets)}>
                                    {openTicket === ticketsReducer.numberTickets ? "CL" : "ON"}
                                </Button>
                            </Item>
                        </Grid>
                        <Grid item xs={0.6}>
                            <Item>
                                <Button sx={{padding: 0, minWidth: 0}}  onClick={() => handleTicketClick(ticketsReducer.numberTickets)}>
                                    {openTicket === ticketsReducer.numberTickets ? "OK" : "ED"}
                                </Button>
                            </Item>
                        </Grid>


                    </Grid>
                    {openTicket === ticketsReducer.numberTickets && (
                        <Grid item p={1} container spacing={2} className={s.openTicket} >
                            <Grid item xs={3}>
                                <Item>
                                    <div className={s.openDescriptionTicket}>
                                        <div><span>Описание проблемы:</span></div>
                                        <div>{ticketsReducer.description}</div>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <div className={s.openDescriptionTicket}>
                                        <div><span>Диагностика:</span></div>
                                        <div>{ticketsReducer.diagnostics}</div>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <div className={s.openDescriptionTicket}>
                                        <div><span>Причина:</span></div>
                                        <div>{ticketsReducer.reason}</div>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <div className={s.openDescriptionTicket}>
                                        <div><span>Дата поступления заявки:</span></div>
                                        <div>{ticketsReducer.dateReceived.format('L, h:mm')}</div>
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            )}
        </div>
    );
};
export default Tickets;
