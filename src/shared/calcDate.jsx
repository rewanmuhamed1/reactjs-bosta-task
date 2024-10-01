import React from 'react';
import { useTranslation } from 'react-i18next';


const CalcDate = ({ date, format }) => {
    const { t, i18n } = useTranslation();
    const entryDate = new Date(date);

    // Get day of the week (e.g., "Thursday")
    const daytxt = entryDate.toLocaleDateString("en-US", { weekday: "long" });
    const month = entryDate.toLocaleDateString("en-US", { month: "long" });
   
    const year = entryDate.getFullYear();
    const dayNumber = entryDate.getDate();
    
    const newDate = entryDate.toLocaleDateString("en-GB"); 

    const time = entryDate.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    let output;

    switch (format) {
        case 'day': 
            output = t(`${daytxt}`) ;
            break;

        case 'year': 
            output = year;
            break;

        case 'date': 
            output = newDate;
            break;

        case 'time': 
            output = time;
            break;

        case 'fullDate1': 
            output = t(`${daytxt}`) + " " + newDate + " " + time;
            break;
        case 'fullDate2': 
            output =  dayNumber+ " " + t(`${month}`) + " " + year;
            break;
        default:
            output = "Invalid format"; 
            break;
    }


    return (
        <div>
            {output}
        </div>
    );
};

export default CalcDate;