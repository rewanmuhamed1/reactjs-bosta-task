import React, { useEffect } from 'react';
import Nav from '../components/navbar/nav';
import Container from '@mui/material/Container';
import TicketInfo from '../components/Ticket/ticket-info';
import TicketSteps from '../components/Ticket/ticket-steps';
import TicketDetails from '../components/Ticket/ticket-details';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/ticket/ticketActions';


function Home() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (data && Object.keys(data).length > 0) {
        let txtColor;
        if (data.CurrentStatus.state === 'DELIVERED') {
            txtColor = '#4caf50';
        } else if (data.CurrentStatus.state === 'CANCELLED') {
            txtColor = '#f44336';
        } else if (data.CurrentStatus.state === 'DELIVERED_TO_SENDER') {
            txtColor = '#ffcc00'; 
        } else {
            txtColor = '#eaeaf0';
        }
        return (
            <>
                {//console.log('home', data.CurrentStatus)
                }

                <Nav />

                <Container   >
                    <Box maxWidth="lg" sx={{ border: 1, borderColor: '#e0e0e0', mt: 8 }}>
                        <TicketInfo
                            CurrentStatus={data.CurrentStatus}
                            TrackingNumber={data.TrackingNumber}
                            PromisedDate={data.PromisedDate}
                            txtColor={txtColor}
                           
                        />
                        <TicketSteps
                            CurrentStatus={data.CurrentStatus}
                            TransitEvents={data.TransitEvents}
                            txtColor={txtColor} />
                    </Box>

                    <Box sx={{ display: 'flex', mt: 5 }}>
                        <TicketDetails
                            TransitEvents={data.TransitEvents}
                            txtColor={txtColor} />
                    </Box>

                </Container>
            </>
        )
    }

}
export default Home;