import React, { useState, useEffect } from 'react';
import { nasa } from '.';
import { APOD } from './api';

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
            {
                apod ?
                    <div>{apod.title}</div>
                :
                    <div>Loading...</div>
            }
        </div>
    )
}