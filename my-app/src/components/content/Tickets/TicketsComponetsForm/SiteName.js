import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SiteName(props) {///я еще не добавил этот компонент так что не ищи куда пропсы спихнуть
    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={siteName}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Название станции" />}
            />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </div>
    );
}

// Стейт с названиями сайтов
const siteName = [
    {label: '42835 ASANAUL'},
    {label: '42835 BAIGABYL'},
    {label: '16166 DRUZHBA'},
];