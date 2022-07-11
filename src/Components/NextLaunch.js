import React, {useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './utils/CountdownTimerUtils'




const TimeTillLaunch = {
  seconds:'00',
  minutues:'00',
  hours:'00',
}

function NextLaunch({countDownTimeinMS}) {



  // ===================================================================================




  // ===================================================================================


  const [timetillnextlaunch, setTimetillnextlaunch] = useState(TimeTillLaunch)

  // this useEffect basically refreshes the time every second:
  useEffect(() => {
    const intervalId = setInterval(() =>{
      updateRemainingTime(countDownTimeinMS)
    }, 1000);
    return () => clearInterval(intervalId)
  },[countDownTimeinMS])

  function updateRemainingTime(countdown){
    setTimetillnextlaunch(getRemainingTimeUntilMsTimestamp(countdown))
  }

 

 
  
  return (
    

    <div>
      <h1>Next Launch</h1>
      <p>Hours: {timetillnextlaunch.hours} </p>
      <p>Minutes: {timetillnextlaunch.minutes}</p>
      <p>Seconds: {timetillnextlaunch.seconds}</p>

      {/* Count down timer in hours */}

      {/* Table for next 10 launches */}
      
    </div>
  )
}

export default NextLaunch