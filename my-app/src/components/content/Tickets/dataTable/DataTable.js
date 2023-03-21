import React, {useMemo, useState} from 'react';

//MRT Imports
import MaterialReactTable from 'material-react-table';
import { MRT_Localization_RU } from 'material-react-table/locales/ru';

//Material-UI Imports
import {
    Box,
    Button,
    ListItemIcon,
    MenuItem,
    Typography,
    TextField,
} from '@mui/material';

//Date Picker Imports
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//Icons Imports
import { AccountCircle, Send } from '@mui/icons-material';
import {useSelector} from "react-redux";



const DataTableTickets = () => {
    const ticketsData = useSelector(state => state.ticketsReducer.ticket);
    const [tableData, setTableData] = useState(() => ticketsData);
    const data = ticketsData.map(ticket => ({
        id: ticket.id,
        siteName: ticket.siteName,
        clientName: ticket.clientName,
        ticketData: ticket.ticketData,
        downTime: ticket.downTime,
        employeeName: ticket.employeeName,
        responsiblePerson: ticket.responsiblePerson,
        statusTicket: ticket.statusTicket,
        description: ticket.description
    }));
    const handleSaveRow = async ({ exitEditingMode, row, values }) => {
        //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
        tableData[row.index] = values;
        //send/receive api updates here
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'Номер ТТ',
                enableClickToCopy: true,

            },
            {
                accessorKey: 'siteName',
                header: 'БС',
            },
            {
                accessorKey: 'clientName', //normal accessorKey
                header: 'Клиент',
            },
            {
                accessorKey: 'ticketData',
                header: 'Дата создания',
            },
            {
                accessorKey: 'downTime',
                header: 'Простой',
            },
            {
                accessorKey: 'employeeName',
                header: 'Дежурный',
            },
            {
                accessorKey: 'responsiblePerson',
                header: 'Ответсвенный',
            },
            {
                accessorKey: 'statusTicket',
                header: 'Статус',
            },
            {
                accessorKey: 'description',
                header: 'description',
            },
        ],
        [],
    );

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            localization={MRT_Localization_RU}
            editingMode="modal" //default
            enableEditing
            onEditingRowSave={handleSaveRow}
            enableColumnFilterModes
            enableColumnOrdering
            enableGrouping
            enablePinning
            enableRowActions
            enableRowSelection
            initialState={{ showColumnFilters: true }}
            positionToolbarAlertBanner="bottom"
            renderDetailPanel={({ row }) => (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4">Сайт:</Typography>
                        <div>{row.original.siteName}</div>
                        <div>{row.original.description}</div>
                    </Box>
                </Box>
            )}
            renderRowActionMenuItems={({ closeMenu }) => [
                <MenuItem
                    key={0}
                    onClick={() => {
                        // View profile logic...
                        closeMenu();
                    }}
                    sx={{ m: 0 }}
                >
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    View Profile
                </MenuItem>,
                <MenuItem
                    key={1}
                    onClick={() => {
                        // Send email logic...
                        closeMenu();
                    }}
                    sx={{ m: 0 }}
                >
                    <ListItemIcon>
                        <Send />
                    </ListItemIcon>
                    Send Email
                </MenuItem>,
            ]}
            renderTopToolbarCustomActions={({ table }) => {
                const handleDeactivate = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert('deactivating ' + row.getValue('name'));
                    });
                };

                const handleActivate = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert('activating ' + row.getValue('name'));
                    });
                };

                const handleContact = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert('contact ' + row.getValue('name'));
                    });
                };

                return (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button
                            color="error"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleDeactivate}
                            variant="contained"
                        >
                            Deactivate
                        </Button>
                        <Button
                            color="success"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleActivate}
                            variant="contained"
                        >
                            Activate
                        </Button>
                        <Button
                            color="info"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleContact}
                            variant="contained"
                        >
                            Contact
                        </Button>
                    </div>
                );
            }}
        />
    );
};

export default DataTableTickets;




/*
import {useMemo} from "react";

const columns = useMemo(
    () => [
        {
            accessorKey: 'id', //access nested data with dot notation
            header: 'Номер ТТ',
            enableClickToCopy: true,

        },
        {
            accessorKey: 'siteName',
            header: 'БС',
        },
        {
            accessorKey: 'clientName', //normal accessorKey
            header: 'Клиент',
        },
        {
            accessorKey: 'ticketData',
            header: 'Дата создания',
        },
        {
            accessorKey: 'downTime',
            header: 'Простой',
        },
        {
            accessorKey: 'employeeName',
            header: 'Дежурный',
        },
        {
            accessorKey: 'responsiblePerson',
            header: 'Ответсвенный',
        },
        {
            accessorKey: 'statusTicket',
            header: 'Статус',
        },
    ],
    [],
);*/
