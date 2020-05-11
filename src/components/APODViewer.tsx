import React from 'react';
import { APOD } from "../api";

interface APODViewerProps {
    apod?: APOD;
    hd?: boolean;
}

export const APODViewer: React.FC<APODViewerProps> = ({ apod, hd }) => {
    if (!apod) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>{apod.title}</h3>
            <img src={hd ? apod.hdurl : apod.url} alt={apod.title} />
            <p>{apod.explanation}</p>
            <p>{apod.copyright}</p>
        </div>
    )
}