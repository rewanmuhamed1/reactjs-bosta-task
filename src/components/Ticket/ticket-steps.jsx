import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import ErrorIcon from '@mui/icons-material/Error'; 
import { styled } from '@mui/material/styles';
import StepConnector from '@mui/material/StepConnector';
import SaveIcon from '@mui/icons-material/Save';

//  connector style
const CustomStepConnector = styled(StepConnector)(({ theme, position, txtColor }) => ({
    ...position,
    height: 3, 
    backgroundColor: '#e0e0e0', 
    '&.Mui-active': {
        backgroundColor: txtColor, 
    },
    '&.Mui-completed': {
        backgroundColor: txtColor, 
    },
}));

export default function TicketSteps({ CurrentStatus, TransitEvents, txtColor }) {
    const { t, i18n } = useTranslation();
    const position = i18n.language === 'ar' ? { // for arabic and english postion
        top: 10,
        left: 'calc(50% + 16px)',
        right: 'calc(-50% + 16px)',
    } : {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    };

    
    const deliveredExists = TransitEvents.some(event => event.state === 'DELIVERED');
    const updatedTransitEvents = deliveredExists 
        ? TransitEvents 
        : [...TransitEvents, { state: 'DELIVERED' }];
    
    const steps = updatedTransitEvents.map(event => ({ state: event.state, reason: event.reason }));
    const statusIndex = steps.findIndex(event => event.state === CurrentStatus.state);
    const activeStep = statusIndex === -1 ? steps.length : statusIndex;

    return (
        <Box sx={{ width: '100%', position: 'relative', p: 3 }}>
            <Stepper activeStep={activeStep || 0} alternativeLabel connector={<CustomStepConnector position={position} txtColor={txtColor} />}>
                {steps.map((event, index) => {

                    const isCompleted = index < activeStep;
                    const isActive = index === activeStep;
                    const isError = "";

                    return (
                        <Step key={index}>
                            <StepLabel
                                StepIconComponent={({ active, completed }) => {
                                    if (isError) {
                                        return <ErrorIcon style={{ color: 'red' }} />; 
                                    }
                                    if (completed) {
                                        return <CheckCircleIcon style={{ color: txtColor, fontSize: '20px' }} />; 
                                    }
                                    
                                    if (event.state === 'DELIVERED' && active) {
                                        return <CheckCircleIcon style={{ color: txtColor, fontSize: '20px' }} />;
                                    }
                                    if (event.state === 'DELIVERED') {
                                        return <SaveIcon style={{ color: activeStep >= steps.length ? txtColor : '#bdbdbd', fontSize: '30px' }} />;
                                    }
                                    return (
                                        <LocalShippingIcon style={{ color: active ? txtColor : '#bdbdbd', fontSize: '30px' }} />
                                    ); // Active and pending state
                                }}
                                sx={{
                                    '& .MuiStepLabel-label': {
                                        color: isActive ? txtColor : (isCompleted ? txtColor : '#bdbdbd'), 
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    },
                                }}
                            >
                                <Typography variant="body2">{t(event.state)}</Typography>
                              
                                {event.reason && (
                                    <Typography variant="caption"  sx={{color:{txtColor}}}>
                                        {t(event.reason)}
                                    </Typography>
                                )}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}
