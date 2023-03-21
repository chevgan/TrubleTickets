import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { Select } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';



const columns = [
    { field: 'id', headerName: 'Номер ТТ', width: 150 },
    { field: 'siteName', headerName: 'БС', width: 150, editable: true },
    { field: 'clientName', headerName: 'Клиент', width: 150 },
    { field: 'ticketData', headerName: 'Дата создания', width: 150 },
    { field: 'downTime', headerName: 'Простой', width: 150 },
    { field: 'employeeName', headerName: 'Дежурный', width: 150 },
    { field: 'responsiblePerson', headerName: 'Ответсвенный', width: 150 },
    { field: 'statusTicket', headerName: 'Статус', width: 150 },
    { field: 'ticketRedactor', headerName: 'Редактировать', width: 150 },

];

const DataTableTickets = () => {
    const ticketsData = useSelector(state => state.ticketsReducer.ticket);
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid editMode="row" rows={ticketsData} columns={columns} />
        </div>
    );
}

export default DataTableTickets;
