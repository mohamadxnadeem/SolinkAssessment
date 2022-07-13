import React, {useState, useEffect} from 'react';
import NextLaunch from '../Components/NextLaunch';
import UpcomingLaunches from '../Components/UpcomingLaunches';
import moment from 'moment-timezone';
import { add } from 'date-fns';


const LAUNCHES_QUERY = `

{
  launchNext {
    launch_date_utc
    mission_name
    launch_site {
      site_name
    }
  }
  launchesUpcoming(limit: 10) {
    mission_name
    launch_date_utc
    launch_site {
      site_name
    }
  }
  
}


`


function HomePage() {

const [nextlaunch, setNextlaunch] = useState([])

useEffect(() => {
  fetch('https://api.spacex.land/graphql/', {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({query:LAUNCHES_QUERY})
    }).then(response => response.json())
    .then(data => setNextlaunch(data.data.launchNext))
  
}, [])



const NextLaunchDate = nextlaunch.launch_date_utc
const LocalLaunchTimeInHours = moment.utc(NextLaunchDate).local().format("HH:mm:ss a")


const TimeNow = moment().format("HH:mm:ss a")




const startTime = moment(`${TimeNow}`, "HH:mm:ss a");
const endTime = moment(`${LocalLaunchTimeInHours}`, "HH:mm:ss a");


const duration = moment.duration(endTime.diff(startTime));


const hours = parseInt(duration.asHours());
const minutes = parseInt(duration.asMinutes()) % 60;
const seconds = parseInt(duration.asSeconds() % 60 % 60)










const NextLaunchTime = add(new Date(), {
  hours: hours,
  minutes: minutes,
  seconds: seconds,
});











  return (
    <>
     <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <NextLaunch futureDate={NextLaunchTime}/>
        </div>
        <div className="w-full mb-12 px-4">
          <UpcomingLaunches/>
        </div>
     </div>

    


    </>
    

    

    
   
  )
}

export default HomePage