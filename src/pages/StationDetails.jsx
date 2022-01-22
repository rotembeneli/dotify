import React, { useState, useEffect } from 'react';
import { PlayList } from '../cmps/PlayList';
import { StationHero } from '../cmps/StationHero';

import { stationService } from "../services/station.service";


export function StationDetails({ match }) {
    const [station, setStation] = useState(null)

    useEffect(async () => {
        const stationId = match.params.id
        const reqStation = await stationService.getById(stationId)
        setStation(reqStation)
    }, [])

    if (!station) return <h1>Loading...</h1>
    return (
        <section className='station'>
            <StationHero station={station} />
            <PlayList station={station}/>
        </section>
    )
}