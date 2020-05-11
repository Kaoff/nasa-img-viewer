import React, { useState, useEffect } from 'react';
import { nasa } from '.';
import { APOD } from './api';
import { APODViewer } from './components/APODViewer';
import { StyledLayout, StyledDateHeader } from './App.style';

export const App: React.FC = () => {
    const [apod, setApod] = useState<APOD>();
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        nasa.getAPOD(date).then(rApod => {
            setApod(rApod);
        })
    }, [date])

    return (
        <StyledLayout>
            <StyledDateHeader />
            <APODViewer apod={apod} hd />
        </StyledLayout>
    )
}