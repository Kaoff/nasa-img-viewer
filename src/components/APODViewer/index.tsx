import React from 'react';
import { APOD } from "../../api";
import { StyledImageWrapper, StyledImage, StyledMeta } from './index.style';

interface APODViewerProps {
    apod?: APOD;
    hd?: boolean;
}

export const APODViewer: React.FC<APODViewerProps> = ({ apod, hd }) => {
    if (!apod) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <StyledImageWrapper>
                <StyledImage src={hd ? apod.hdurl : apod.url} alt={apod.title} />
            </StyledImageWrapper>
            <StyledMeta>
                <p>{apod.title}</p>
                <p>{apod.explanation}</p>
                <p>{apod.copyright}</p>
            </StyledMeta>
        </>
    )
}