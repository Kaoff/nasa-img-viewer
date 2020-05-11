import React, { useState, useEffect } from 'react';
import { nasa } from '.';
import { APOD } from './api';
import { APODViewer } from './components/APODViewer';
import { StyledLayout, StyledDateHeader, StyledButton } from './App.style';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const CustomInput = ({value, onClick}: any) => (
    <StyledButton onClick={onClick}>{value}</StyledButton>
);

export const App: React.FC = () => {
    const [apod, setApod] = useState<APOD>();
    const [date, setDate] = useState<Date | null>(new Date());

    useEffect(() => {
        setApod(undefined);
        nasa.getAPOD(date!).then(rApod => {
            setApod(rApod);
        })
    }, [date])

    return (
        <StyledLayout>
            <StyledDateHeader>
                <div>
                    <DatePicker
                        dateFormat="EEEE MMMM d, yyyy"
                        onChange={newDate => setDate(newDate)}
                        selected={date} 
                        customInput={<CustomInput />}
                        filterDate={fDate => new Date() > fDate}
                        popperPlacement="bottom-center"
                        showPopperArrow={false}
                    />
                </div>
            </StyledDateHeader>
            <APODViewer apod={apod} hd />
        </StyledLayout>
    )
}
