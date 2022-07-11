import React, {useState, useEffect} from 'react';
import NextLaunch from '../Components/NextLaunch';
import UpcomingLaunches from '../Components/UpcomingLaunches';
import moment from 'moment-timezone';
import dayjs from "dayjs";


const LAUNCHES_QUERY = `

{
  launchNext {
    launch_date_utc
    mission_name
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
const dayjs = require('dayjs')

const date = nextlaunch.launch_date_utc
const LocalLaunchTimeInHours = moment.utc(date).local().format("HH-mm-ss")
const LaunchtimeinMS = LocalLaunchTimeInHours.split('-')
const timeInMilliseconds = (LaunchtimeinMS[0] * 3600000) + (LaunchtimeinMS[1] * 60000);

const TimeNow = moment().format("HH:mm:ss")



console.log(LocalLaunchTimeInHours)




  return (
    <>
     <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <NextLaunch
            countDownTimeinMS={timeInMilliseconds}
          />
        </div>
        <div className="w-full mb-12 px-4">
          <UpcomingLaunches/>
        </div>
     </div>

    


    </>
    

    

    
   
  )
}

export default HomePage