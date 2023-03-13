import { useDispatch, useSelector } from "react-redux";
import React, {useState} from "react";
import {Button, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
const AddTickets = () => {
    const dispatch = useDispatch();
    const ticketsReducer = useSelector(state => state.ticketsReducer.notes)
    const newNumberTickets = useSelector(state => state.ticketsReducer.ticket.length)

    const handleAddTicket = () => {
        const today = new Date().toISOString().substring(0, 10);
        const newTicket = {
            numberTickets: newNumberTickets,
            siteName: selectedValue.name,
            clientName: selectedValue.client,
            ticketData: today,
            downTime: "null",
            employeeName: "null",
            responsiblePerson: "null",
            statusTicket: false,
            id: Date.now(),
        };
        dispatch({ type: "ADD_TICKETS", payload: newTicket });
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [open, setOpen] = useState(false);



    const [selectedValue, setSelectedValue] = useState(null);
    const notes = useSelector((state) => state.ticketsReducer.notes);

    const handleValueChange = (event, newValue) => {
        setSelectedValue(newValue);
    };

    return (
        <div>
                <Button onClick={handleOpen}>Добавить тикет</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Заполните тикет</h2>
                        <form action="">
                            <Autocomplete
                                options={notes}
                                getOptionLabel={(option) => option.name}
                                value={selectedValue}
                                onChange={handleValueChange}
                                renderInput={(params) => (
                                    <TextField {...params} label="Notes" margin="normal" />
                                )}
                            />
                            <button type="button" onClick={() => handleAddTicket()}>Отправить</button>
                        </form>
                    </Box>
                </Modal>
        </div>
    );
};

export default AddTickets;
