import React, { useState, useEffect } from 'react';
import { nasa } from '.';
import { APOD } from './api';
import { APODViewer } from './components/APODViewer';

export const App: React.FC = () => {
    const [apod, setApod] = useState<APOD>();
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        nasa.getAPOD(date).then(rApod => {
            setApod(rApod);
        })
    }, [date])

    return (
        <div>
            <APODViewer apod={apod} hd />
        </div>
    )
}