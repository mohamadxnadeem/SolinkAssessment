import dayjs from "dayjs";
import moment from "moment-timezone";



export function getRemainingTimeUntilMsTimestamp(timestampMs){
    
    const timestamp = moment(timestampMs);
    const now = moment();


 

    return{
        seconds:getRemainingSeconds(now, timestamp),
        minutes:getRemainingMinutes(now, timestamp),
        hours:getRemainingHours(now, timestamp),
    }
}

function getRemainingSeconds(now, timestamp){
    const seconds = timestamp.diff(now, 'seconds') % 60;
    return seconds;
}

function getRemainingMinutes(now, timestamp){
    const minutes = timestamp.diff(now, 'minutes') % 60;
    return minutes;
}


function getRemainingHours(now, timestamp){
    const hours = timestamp.diff(now, 'hours') % 24;
    return hours;
}