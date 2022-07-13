import React, { useEffect, useState } from "react";
import moment from "moment";



import { useCountdown } from "./Hooks/useCountdown";






function NextLaunch({ futureDate }) {
  const { hours, minutes, seconds, isTimeUp } = useCountdown(futureDate);


  const rocketAlreadyLaunched = isTimeUp ? (

    <div>
<p className="text-center text-4xl	m-5">Rocket Already launched for the day! Come back tomorrow</p>
<img src="https://kineticmarketing.s3.amazonaws.com/nasa-dCgbRAQmTQA-unsplash.jpg"/>

</div>
   
  ):(
   

    <>
    <p className="text-center text-4xl	m-5">Hours till next launch: {hours} : {minutes} : {seconds} 🚀🚀🚀</p>

  </>
    
  );


  return (

    
    

    <div className=" border-0 bg-slate-200">
      {rocketAlreadyLaunched}
 
    </div>
  )
}

export default NextLaunch