import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel, MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Select
} from "@mui/material";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import s from "../Tickets.module.css"

const AddTickets = () => {
    const dispatch = useDispatch(); // Получаем диспетчер Redux
    const newNumberTickets = useSelector(state => state.ticketsReducer.ticket.length) // Получаем длину массива билетов для генерации нового номера
    const siteName = useSelector((state) => state.ticketsReducer.siteName); // Получаем список всех БС из состояния Redux
    const employeeName = useSelector((state) => state.ticketsReducer.employeeName); // Получаем список всех сотрудников из состояния Redux
    const responsiblePerson = useSelector((state) => state.ticketsReducer.responsiblePerson); // Получаем список всех ответсвенных из состояния Redux

    const [selectedSiteName, setValueSiteName] = useState(null); // Устанавливаем состояние выбранной БС
    const [selectedEmployeeName, setSelectedEmployeeName] = React.useState(null); // Устанавливаем состояние выбранного сотрудника
    const [selectedResponsiblePerson, setSelectedResponsiblePerson] = React.useState(null); // Устанавливаем состояние выбранного сотрудника
    const [textDescription, setTextDescription] = useState(''); // Устанавливаем состояние описания проблемы
    const [error, setError] = useState(false); // Создаем состояние ошибки




    const handleInputChange = (event, newValue) => { //Обработчик изменения текста описания
        setTextDescription(newValue);
        dispatch({ type: "UPDATE_DESCRIPTION", payload: event.target.value });
    };
    const text = useSelector((state) => state.ticketsReducer.description);
    const handleValueChangeSiteName = (event, newValue) => {
        setValueSiteName(newValue);
    }; // Обработчик изменения выбранной БС
    const handleChangeEmployeeName = (event, newValue) => {
        setSelectedEmployeeName(newValue);
    }; // Обработчик изменения выбранного сотрудника
    const handleChangeResponsiblePerson = (event, newValue) => {setSelectedResponsiblePerson(newValue);}; // Обработчик изменения выбранного ответсвенного
    const handleSubmit = (event) => {
        // Проверяем, заполнены ли обязательные поля
        if (!selectedSiteName) {
            setError(true)
        }

        event.preventDefault();
        const today = new Date().toISOString().substring(0, 10);
        const descriptionText = text || <div className={s.textError}>Описания нету</div>;

        const newTicket = {
            numberTickets: newNumberTickets,
            siteName: selectedSiteName.name,
            clientName: selectedSiteName.client,
            ticketData: today,
            downTime: "null",
            employeeName: selectedEmployeeName.name,
            responsiblePerson: selectedResponsiblePerson.name,
            statusTicket: false,
            id: Date.now(),
            isHidden: true,
            description: descriptionText,
        };

        dispatch({type: "ADD_TICKETS", payload: newTicket});
    };


    const handleToggleModal = () => {
        setOpen(!open);
    };
    const [open, setOpen] = useState(false);
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
    return (
        <div>
            <Button onClick={handleToggleModal}>Добавить тикет</Button>
            <Modal
                open={open}
                onClose={handleToggleModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{...style, width: 400}}>
                    <form onSubmit={handleSubmit}>
                        <h2>Опишите заявку</h2>

                        <div> {/*SiteName - название БС*/}
                            <Autocomplete
                                options={siteName}
                                getOptionLabel={(option) => option.name}
                                value={selectedSiteName}
                                onChange={handleValueChangeSiteName}
                                renderInput={(params) => (
                                    <TextField error={error && !selectedSiteName} {...params} label="Название БС" margin="normal"/>
                                )}
                            />

                        </div>

                        <div> {/*Выбор дежурного NOC*/}
                            <Autocomplete
                                options={employeeName}
                                getOptionLabel={(option) => option.name}
                                value={selectedEmployeeName}
                                onChange={handleChangeEmployeeName}
                                renderInput={(params) => (
                                    <TextField error={error && !selectedEmployeeName} {...params} label="ФИО Держурного" margin="normal" />

                                )}
                            />
                        </div>

                        <div> {/*Выбор ответственного NOC*/}
                            <Autocomplete
                                options={responsiblePerson}
                                getOptionLabel={(option) => option.name}
                                value={selectedResponsiblePerson}
                                onChange={handleChangeResponsiblePerson}
                                renderInput={(params) => (
                                    <TextField error={error && !selectedResponsiblePerson} {...params} label="Отвественный" margin="normal" />

                                )}
                            />
                        </div>
                        <br/>
                        <div> {/*Описание проблемы*/}
                            <TextField
                                id="outlined-multiline-flexible"
                                label = "Описание проблеимы"
                                multiline
                                maxRows={10}
                                value={textDescription}
                                onChange={handleInputChange}
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            />
                        </div>
                        <br/>
                        <Button type="submit" variant="contained" color="primary" margin="normal">
                            Добавить
                        </Button>
                    </form>
                </Box>

            </Modal>
        </div>
    );
};

export default AddTickets;





