import React, { useState, useEffect } from 'react';
import { nasa } from '.';
import { APOD } from './api';
import { APODViewer } from './components/APODViewer';
import { StyledLayout, StyledDateHeader, StyledButton } from './App.style';
import DatePicker from 'react-datepicker';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import "react-datepicker/dist/react-datepicker.css";

const CustomInput = ({value, onClick}: any) => (
    <StyledButton onClick={onClick}>{value}</StyledButton>
);

export const App: React.FC = () => {
    const [apod, setApod] = useState<APOD>();
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        setApod(undefined);
        nasa.getAPOD(date!).then(rApod => {
            setApod(rApod);
        })
    }, [date])

    return (
        <StyledLayout>
            <StyledDateHeader>
                <FaArrowLeft color="white" onClick={() => {
                    const newDate = new Date();
                    newDate.setDate(date.getDate() - 1);
                    setDate(newDate);
                }} />
                <div>
                    <DatePicker
                        dateFormat="EEEE MMMM d, yyyy"
                        onChange={newDate => setDate(newDate!)}
                        selected={date} 
                        customInput={<CustomInput />}
                        filterDate={fDate => new Date() > fDate}
                        popperPlacement="bottom-center"
                        showPopperArrow={false}
                    />
                </div>
                <FaArrowRight color={date.getDate() < new Date().getDate() ? "white" : "gray"} onClick={() => {
                    if (date.getDate() === new Date().getDate()) return;
                    const newDate = new Date();
                    newDate.setDate(date.getDate() + 1);
                    setDate(newDate);
                }} />
            </StyledDateHeader>
            <APODViewer apod={apod} hd />
        </StyledLayout>
    )
}
