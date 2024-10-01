import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CalcDate from '../../shared/calcDate';





export default function TicketDetails({TransitEvents ,txtColor}) {
    const { t, i18n } = useTranslation();
    const rows = TransitEvents;
    const textAlgin = i18n.language === 'ar' ? 'right' : 'left';
    return (
        <Box>
            <Typography sx={{ mb: 3 }} >{t('TicketDetails')} </Typography>
            <TableContainer component={Paper} >
                <Table sx={{  width: '100%'  }} aria-label="simple table">
                    <TableHead >
                        <TableRow sx={{ backgroundColor: '#eeeeee' }}>
                            <TableCell sx={{textAlign:textAlgin}} > {t('Branch') }</TableCell>
                            <TableCell sx={{textAlign:textAlgin}} > {t('date') }</TableCell>
                            <TableCell sx={{textAlign:textAlgin}} > {t('time') }</TableCell>
                            <TableCell sx={{textAlign:textAlgin}} > {t('detail') }</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row,i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{textAlign:textAlgin}} >
                                   مدينة نصر
                                </TableCell>
                                
                                <TableCell sx={{textAlign:textAlgin}} > <CalcDate date={row.timestamp}  format='date'/></TableCell>
                                <TableCell sx={{textAlign:textAlgin}} ><CalcDate date={row.timestamp}  format='time'/></TableCell>
                                <TableCell sx={{textAlign:textAlgin}} > {t(`${row.state}`) }<br/> <span style={{color:txtColor}} >{row.reason ? row.reason:null}</span> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>

    );
}
