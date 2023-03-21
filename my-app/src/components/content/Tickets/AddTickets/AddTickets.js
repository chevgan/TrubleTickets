import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Button, Divider, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
import s from "../Tickets.module.css"
import {styled} from "@mui/material/styles";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment from 'moment';
import {DatePicker, TimePicker} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";

////Style
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
const AddTicketButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: '1px solid',
    color: 'white',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});
////Style


const AddTickets = () => {
    const dispatch = useDispatch(); // Получаем диспетчер Redux
    const newNumberTickets = useSelector(state => state.ticketsReducer.ticket.length) // Получаем длину массива билетов для генерации нового номера
    const siteName = useSelector((state) => state.ticketsReducer.siteName); // Получаем список всех БС из состояния Redux
    const employeeName = useSelector((state) => state.ticketsReducer.employeeName); // Получаем список всех сотрудников из состояния Redux
    const responsiblePerson = useSelector((state) => state.ticketsReducer.responsiblePerson); // Получаем список всех ответсвенных из состояния Redux



    const [selectedDate, setSelectedDate] = useState(moment().tz('Asia/Almaty'));
    const [state, setState] = useState({
        selectedSiteName: null, // Устанавливаем состояние выбранной БС
        selectedEmployeeName: null, // Устанавливаем состояние выбранного сотрудника
        selectedResponsiblePerson: null, //Устанавливаем состояние выбранного отвественного
        textDescription: '', // Устанавливаем состояние описания проблемы
        textDiagnostics: '', // Устанавливаем состояние диагностики
        textReason: '', // Устанавливаем состояние причины
        error: false, // Создаем состояние ошибки
    });

    const handleValueChangeSiteName = (event, newValue) => {
        setState((prevState) => ({
            ...prevState,
            selectedSiteName: newValue,
        }));
    }; // Обработчик изменения выбранной БС

    const handleChangeEmployeeName = (event, newValue) => {
        setState((prevState) => ({
            ...prevState,
            selectedEmployeeName: newValue,
        }));
    }; // Обработчик изменения выбранного сотрудника

    const handleChangeResponsiblePerson = (event, newValue) => {
        setState((prevState) => ({
            ...prevState,
            selectedResponsiblePerson: newValue,
        }));
    }; // Обработчик изменения выбранного ответсвенного

    const handleInputDescriptionChange = (event) => {
        const newValue = event.target.value;
        setState((prevState) => ({
            ...prevState,
            textDescription: newValue,
        }));
    }; //Обработчик изменения текста описания
    const handleInputDiagnosticsChange = (event) => {
        const newValue = event.target.value;
        setState((prevState) => ({
            ...prevState,
            textDiagnostics: newValue,
        }));
    }; //Обработчик изменения текста диагностики
    const handleInputReasonChange = (event) => {
        const newValue = event.target.value;
        setState((prevState) => ({
            ...prevState,
            textReason: newValue,
        }));
    }; //Обработчик изменения текста причины
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };//Обработчик изменения даты и времени

    const handleSubmit = (event) => {

        event.preventDefault();
        const today = selectedDate
        const descriptionText = state.textDescription || <div className={s.textError}>Описания нет</div>;
        const textDiagnostics = state.textDiagnostics || <div className={s.textError}>Диагностики нет</div>;
        const textReason = state.textReason || <div className={s.textError}>Причины нет</div>;


        const newTicket = {
            id: newNumberTickets,
            siteName: state.selectedSiteName.name,
            clientName: state.selectedSiteName.client,
            ticketData: moment(today).format("DD.MM.YYYY"),
            downTime: "null",
            employeeName: state.selectedEmployeeName.name,
            responsiblePerson: state.selectedResponsiblePerson.name,
            statusTicket: false,
            isHidden: true,
            description: descriptionText,
            diagnostics: textDiagnostics,
            reason: textReason,
            dateReceived: selectedDate,
        };
        console.log("===================");
        console.log({newTicket});
        console.log("===================");
        dispatch({type: "ADD_TICKETS", payload: newTicket});
        setState((prevState) => ({ ...prevState, error: false }));
    };

    const handleToggleModal = () => {
        setOpen(!open);
    };
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div>
                <AddTicketButton startIcon={<AddIcon style={{fontSize: "2rem"}}/>}
                                 onClick={handleToggleModal}>Добавить
                </AddTicketButton>
            </div>
            <Modal
                open={open}
                onClose={handleToggleModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{...style, width: 500}}>
                    <form onSubmit={handleSubmit}>
                        <h2>Опишите заявку</h2>

                        <div> {/*SiteName - название БС*/}
                            <Autocomplete
                                options={siteName}
                                getOptionLabel={(option) => option.name}
                                value={state.selectedSiteName}
                                onChange={handleValueChangeSiteName}
                                renderInput={(params) => (
                                    <TextField error={state.error && !state.selectedSiteName} {...params} label="Название БС"
                                               margin="normal"/>
                                )}
                            />

                        </div>

                        <div> {/*Выбор дежурного NOC*/}
                            <Autocomplete
                                options={employeeName}
                                getOptionLabel={(option) => option.name}
                                value={state.selectedEmployeeName}
                                onChange={handleChangeEmployeeName}
                                renderInput={(params) => (
                                    <TextField error={state.error && !state.selectedEmployeeName} {...params} label="ФИО Держурного"
                                               margin="normal"/>

                                )}
                            />
                        </div>

                        <div> {/*Выбор ответственного NOC*/}
                            <Autocomplete
                                options={responsiblePerson}
                                getOptionLabel={(option) => option.name}
                                value={state.selectedResponsiblePerson}
                                onChange={handleChangeResponsiblePerson}
                                renderInput={(params) => (
                                    <TextField error={state.error && !state.selectedResponsiblePerson} {...params}
                                               label="Отвественный" margin="normal"/>

                                )}
                            />
                        </div>

                        <div>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                    <DateTimePicker
                                        label="Дата и время поступления заявки:"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        inputFormat="HH:mm"
                                        ampm={false}
                                        renderInput={(props) => <TextField {...props} />}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>

                        <Divider variant="fullWidth" sx={{margin: 2}}/>
                        <div> {/*Описание проблемы*/}
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Описание проблеимы"
                                multiline
                                maxRows={10}
                                value={state.textDescription}
                                onChange={handleInputDescriptionChange}
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            />
                        </div>
                        <br/>

                        <div> {/*Описание диагностики*/}
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Диагностика"
                                multiline
                                maxRows={10}
                                value={state.textDiagnostics}
                                onChange={handleInputDiagnosticsChange}
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            />
                        </div>
                        <br/>

                        <div> {/*Описание причины*/}
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Причина"
                                multiline
                                maxRows={10}
                                value={state.textReason}
                                onChange={handleInputReasonChange}

                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            />
                        </div>


                        <br/>
                        <Button
                            disabled={state.error && !state.selectedSiteName || !state.selectedEmployeeName || !state.selectedResponsiblePerson}
                            type="submit" variant="contained" color="primary" margin="normal"
                            sx={{width: 500, height: 50}}
                        >
                            Добавить
                        </Button>
                    </form>
                </Box>

            </Modal>
        </div>
    );
};

export default AddTickets;




