

import { useEffect, useState } from "react";
import { intervalToDuration, isBefore } from 'date-fns';

export const useCountdown = (futureDate) => {
    const [now, setNow] =  useState(new Date());

    useEffect(() => {        
        const interval = setInterval(() => {
            setNow(new Date());          
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, [futureDate]);

    const isTimeUp = isBefore(futureDate, now);

    if (isTimeUp){
        console.log('time is up')
    }


    let { hours, minutes, seconds } = intervalToDuration({
        start: now,
        end: futureDate
    });

    return { hours, minutes, seconds, isTimeUp};
};