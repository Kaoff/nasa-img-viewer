export interface APOD {
    hdurl: string;
    url: string;
    explanation: string;
    title: string;
    copyright: string;
}

export class NASA {
    token: string;

    constructor(token: string) {
        this.token = token;
    }

    /**
     * Get NASA's APOD from a certain date if provided.
     * 
     * @param {string} date - The APOD date, must respect the YYYY-MM-DD format
     */
    getAPOD(date?: Date): Promise<APOD> {
        let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.token}`;

        if (date) {
            fetchUrl += `&date=${date.toISOString().substr(0, 10)}`
        }

        return fetch(fetchUrl).then((r) => r.json())
    }
}