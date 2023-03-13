import React, { useState, useEffect } from 'react';

import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import s from "./Tickets.module.css"

import {useDispatch, useSelector} from "react-redux";



class IconButton extends React.Component {
    render() {
        return null
    }
}

function KeyboardArrowDownIcon(props) {
    return null;
}

const Tickets = () => {
    const dispatch = useDispatch()
    const ticketsReducer = useSelector(state => state.ticketsReducer.ticket)


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
                    <Grid item p={1} container spacing={2}>
                        <Grid item xs={1}>
                            <Item>{ticketsReducer.numberTickets}</Item>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Item>{ticketsReducer.siteName}</Item>
                        </Grid>
                        <Grid item xs={1}>
                            <Item >
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
                        <Grid item xs={1.5}>
                            <Item>
                                <button> статус </button>
                            </Item>
                        </Grid>
                        <Grid item xs={0.5}>
                            <Item>
                                <button>1</button>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </div>
    );
};
export default Tickets;
