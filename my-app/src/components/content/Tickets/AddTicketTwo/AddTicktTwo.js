/*
let errorMessage = "";
if (!selectedSiteName) {
    errorMessage = "Выберите название сайта.";
} else if (!selectedEmployeeName) {
    errorMessage = "Выберите сотрудника.";
} else if (!selectedResponsiblePerson) {
    errorMessage = "Выберите ответственное лицо.";
}
setError(errorMessage !== ""); // устанавливаем состояние ошибки в true, если сообщение об ошибке не пустое
if (errorMessage !== "") return; // выходим из функции, если есть сообщение об ошибке
// остальной код функции
}
*/




/*
import React, { useState } from 'react';
import {TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Modal} from '@mui/material';
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";

const MyForm = () => {
    const dispatch = useDispatch();
    const newNumberTickets = useSelector(state => state.ticketsReducer.ticket.length)


    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    const handleGenderChange = (event) => setGender(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, age, gender });
        const today = new Date().toISOString().substring(0, 10);

        const newTicket = {
            numberTickets: age,
            siteName: name,
            clientName: name.client,
            ticketData: today,
            downTime: "null",
            employeeName: name,
            responsiblePerson: "null",
            statusTicket: false,
            id: Date.now(),
            isHidden: true,
            description: name,
        };

        dispatch({ type: "ADD_TICKETS", payload: newTicket });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>My Form</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" value={name} onChange={handleNameChange} margin="normal" />
                <TextField label="Age" type="number" value={age} onChange={handleAgeChange} margin="normal" />
                <FormControl margin="normal">
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select labelId="gender-label" id="gender" value={gender} label="Gender" onChange={handleGenderChange}>
                        <MenuItem value="">Select Gender</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                    {gender === '' && <FormHelperText>Please select your gender</FormHelperText>}
                </FormControl>
                <Button type="submit" variant="contained" color="primary" margin="normal">
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default MyForm;


const AddTickets = () => {
    const dispatch = useDispatch();
    const newNumberTickets = useSelector(state => state.ticketsReducer.ticket.length)

    const handleAddTicket = () => {
        const today = new Date().toISOString().substring(0, 10);

        const newTicket = {
            numberTickets: newNumberTickets,
            siteName: selectedValueSiteName.name,
            clientName: selectedValueSiteName.client,
            ticketData: today,
            downTime: "null",
            employeeName: selectedValueEmployeeName.name,
            responsiblePerson: "null",
            statusTicket: false,
            id: Date.now(),
            isHidden: true,
            description: text,
        };

        dispatch({ type: "ADD_TICKETS", payload: newTicket });
        setValue(''); // очистить поле ввода после добавления тикета
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
    const handleToggleModal = () => {
        setOpen(!open);
    };
    const [open, setOpen] = useState(false);


    //// Инпут с выбором текста ////
    const [selectedValueSiteName, setSelectedValueSiteName] = useState(null);
    const notes = useSelector((state) => state.ticketsReducer.notes);
    const handleValueChangeSiteName = (event, newValue) => {
        setSelectedValueSiteName(newValue);
    };
    //// Инпут с выбором текста ////
    ////
    //// Инпут с выбором текста ////
    const [selectedValueEmployeeName, setSelectedValueEmployeeName] = React.useState(null);
    const employeeName = useSelector((state) => state.ticketsReducer.employeeName);
    const handleChangeEmployeeName = (event, newValue) => {
        setSelectedValueEmployeeName(newValue);
    };
    //// Инпут с выбором текста ////
    ////
    //// Инпут с воодом текста ////
    const [value, setValue] = useState('');
    const handleInputChange = (event, newValue) => {
        setValue(newValue);
        dispatch({ type: "UPDATE_DESCRIPTION", payload: event.target.value });
    };

    const text = useSelector((state) => state.ticketsReducer.description);

    //// Инпут с воодом текста ////

    return (
        <div>
            <Button onClick={handleToggleModal}>Добавить тикет</Button>
            <Modal
                open={open}
                onClose={handleToggleModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Заполните тикет</h2>
                    <form action="">
                        <Autocomplete
                            options={notes}
                            getOptionLabel={(option) => option.name}
                            value={selectedValueSiteName}
                            onChange={handleValueChangeSiteName}
                            renderInput={(params) => (
                                <TextField {...params} label="Название БС" margin="normal" />
                            )}
                        />

                        <Autocomplete
                            options={employeeName}
                            getOptionLabel={(option) => option.name}
                            value={selectedValueEmployeeName}
                            onChange={handleChangeEmployeeName}
                            renderInput={(params) => (
                                <TextField {...params} label="ФИО Держурного" margin="normal" />
                            )}
                        />
                    </form>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        Validate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Описание проблеимы"
                            multiline
                            maxRows={10}
                            value={value}
                            onChange={handleInputChange}
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        />
                    </Box>
                    <button type="button" onClick={() => handleAddTicket()}>Отправить</button>
                </Box>

            </Modal>
        </div>
    );
};

export default AddTickets;*/
