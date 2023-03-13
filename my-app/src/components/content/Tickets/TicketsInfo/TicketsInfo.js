import s from "./TicketsInfo.module.css"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React from "react";

const TicketsInfo = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div>
            <Box  sx={{ flexGrow: 1}}>
                <Grid item p={1} container spacing={2}>
                    <Grid item xs={1}>
                        <Item sx={{backgroundColor: '#b3e5fc'}}>Номер ТТ</Item>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Item sx={{backgroundColor: '#b3e5fc'}} >БС</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item sx={{backgroundColor: '#b3e5fc'}} >Клиент</Item>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Item sx={{backgroundColor: '#b3e5fc'}} >Дата</Item>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Item sx={{backgroundColor: '#b3e5fc'}} >Простой</Item>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Item sx={{backgroundColor: '#b3e5fc'}} >Дежурный</Item>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Item sx={{backgroundColor: '#b3e5fc'}} >Ответсвенный</Item>
                    </Grid>
                    <Grid item xs={1.5}>Статус</Grid>

                </Grid>
            </Box>
        </div>
    )
}
export default TicketsInfo;