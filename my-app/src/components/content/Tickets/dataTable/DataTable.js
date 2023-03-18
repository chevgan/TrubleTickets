import DataTable from 'react-data-table-component';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import s from "./DataTable.module.css"
import {styled} from '@mui/material/styles';
import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import {useSelector} from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import EditIcon from '@mui/icons-material/Edit';
import TextField from "@mui/material/TextField";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    FormControl, IconButton,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select
} from "@mui/material";



const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ExpandedComponent = ({data}) => {
    return (
        <div className={s.centre}>
            <Box sx={{width: '80%', display: 'flex', justifyContent: 'center'}}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}
                      style={{flexWrap: 'wrap'}}>
                    <Grid item xs={12} sm={6} md={4} style={{flexBasis: '100%'}}>
                        <Button type="primary">Редактировать</Button>
                        <Item>
                            <div style={{wordWrap: 'break-word'}}>
                                <span>
                                <div style={{fontWeight: "bold"}}>
                                    Описание проблемы:
                                </div>
                                    {data.description}
                                </span>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <div style={{wordWrap: 'break-word'}}>
                                <span>
                                <div style={{fontWeight: "bold"}}>
                                    Диагностика:
                                </div>
                                    {data.diagnostics}
                                </span>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <div style={{wordWrap: 'break-word'}}>
                                <span>
                                <div style={{fontWeight: "bold"}}>
                                    Причина:
                                </div>
                                    {data.reason}
                                </span>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}


const DataTableTickets = () => {
    const tickets = useSelector(state => state.ticketsReducer.ticket);
    const [filterValues, setFilterValues] = useState({});
    const [editRow, setEditRow] = useState(null);

    const handleCellClick = (rowIndex, colIndex) => {
        if (colIndex !== 0) {
            setEditRow(rowIndex);
        }
    };

    const handleEditClick = (rowIndex) => {
        setEditRow(rowIndex);
    };

    const handleClose = () => {
        setEditRow(null);
    };

    const handleSave = (newData) => {
        // отправить данные на сервер и обновить состояние таблицы
        handleClose();
    };

    const renderEditForm = () => {
        debugger
        if (editRow !== null) {
            const rowData = tickets[editRow];
            return (
                <Dialog open={editRow !== null} onClose={handleClose}>
                    <DialogTitle>Редактирование</DialogTitle>
                    <DialogContent>
                        {/* отображение полей, которые можно редактировать */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Отмена</Button>
                        <Button onClick={() => handleSave(tickets)}>Сохранить</Button>
                    </DialogActions>
                </Dialog>
            );
        }
    };




    const handleFilterChange = (column, value) => {
        if (value && filteredTickets.filter(ticket => String(ticket[column]).toLowerCase().includes(value.toLowerCase())).length === 0) {
            return; // если нет совпадений, не обновляйте фильтр
        }
        setFilterValues(prevFilters => ({ ...prevFilters, [column]: value }));
    };

    const columns = [
        {
            name: (
                <div>
                    <TextField
                        id="standard-basic"
                        label="Номер ТТ"
                        variant="standard"
                        type="text"
                        value={filterValues.id || ''}
                        onChange={e =>
                            handleFilterChange('id', e.target.value)
                        }
                    />
                </div>
            ),
            selector: row => row.id,
            sortable: true,

        },

        {
            name: (
                <div>
                    <TextField
                        id="standard-basic"
                        label="БС"
                        variant="standard"
                        type="text"
                        value={filterValues.siteName || ''}
                        onChange={e =>
                            handleFilterChange('siteName', e.target.value)
                        }
                    />
                </div>
            ),
            selector: row => row.siteName,
            sortable: true,
        },
        {
            name: (
                <div>
                    <TextField
                        id="standard-basic"
                        label="Клиент"
                        variant="standard"
                        type="text"
                        value={filterValues.clientName || ''}
                        onChange={e =>
                            handleFilterChange('clientName', e.target.value)
                        }
                    />
                </div>
            ),

            selector: row => row.clientName,
            sortable: true,
        },
        {
            name: (
                <div>
                    <TextField
                        id="standard-basic"
                        label="Дата создания"
                        variant="standard"
                        type="text"
                        value={filterValues.ticketData || ''}
                        onChange={e =>
                            handleFilterChange('ticketData', e.target.value)
                        }
                    />
                </div>
            ),
            selector: row => row.ticketData,
            sortable: true,
        },
        {
            name: 'Простой',
            selector: row => row.downTime,
            sortable: true,
        },
        {
            name: 'Дежурный',
            selector: row => row.employeeName,
            sortable: true,
        },
        {
            name: 'Ответсвенный',
            selector: row => row.responsiblePerson,
            sortable: true,
        },
        {
            name: 'Статус',
            selector: row => row.statusTicket,
            sortable: true,
        },
        {
            name: 'Действия',
            buttonEdit: true,
            selector: (row) => {
                if (editRow === row.id) {
                    // возвращаем форму редактирования
                    return renderEditForm();
                } else {
                    // возвращаем кнопку редактирования
                    return (
                        <IconButton onClick={() => handleEditClick(row.id)}>
                            <EditIcon/>
                        </IconButton>
                    );
                }
            },
        },
    ];








    const filteredTickets = tickets.filter((ticket) =>
        Object.entries(filterValues).every(([column, filterValue]) => {
            if (!ticket.hasOwnProperty(column)) { // проверка, есть ли столбец в объекте ticket
                return true; // если столбца нет, вернуть true, чтобы его игнорировать
            }
            return !filterValue || String(ticket[column]).toLowerCase().includes(filterValue.toLowerCase());
        })
    );

    return (
        <div>
            <DataTable
                direction="auto"
                striped
                highlightOnHover
                pagination
                expandOnRowDoubleClicked
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                columns={columns}
                data={filteredTickets}
            />
        </div>
    );
};
export default DataTableTickets;
