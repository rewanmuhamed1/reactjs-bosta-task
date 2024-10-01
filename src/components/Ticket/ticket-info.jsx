import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import CalcDate from '../../shared/calcDate';

const TicketInfo = ({CurrentStatus , TrackingNumber  , PromisedDate ,txtColor}) => {
    const { t, i18n } = useTranslation();
    


    return (
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },justifyContent: 'space-between', p:3 , borderBottom: 1 ,borderColor: '#e0e0e0'}}>
                <Box>
                    <Typography variant="caption" gutterBottom sx={{ display: 'block', color: '#757575' }}>
                    {t('TrackingNumber')}  {TrackingNumber}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ color : txtColor } }>
                    {t(`${CurrentStatus.state}`)}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="caption" gutterBottom sx={{ display: 'block', color: '#757575' }}>
                    {t('lastUpdate')}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                       <CalcDate date={CurrentStatus.timestamp}  format='fullDate1'/>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="caption" gutterBottom sx={{ display: 'block', color: '#757575' }}>
                    {t('MerchantName')}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        SOUQ.COM
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="caption" gutterBottom sx={{ display: 'block', color: '#757575' }}>
                    {t('PromisedDate')}  
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    <CalcDate date={PromisedDate}  format='fullDate2'/>
                    </Typography>
                </Box>
            </Box>
      

    );
};

export default TicketInfo; 