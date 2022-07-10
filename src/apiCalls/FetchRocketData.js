import React, {useState, useEffect } from 'react';

const LAUNCHES_QUERY = `

{
  launchNext {
    launch_date_local
    launch_site {
      site_name
    }
    mission_name
  }
  launchesPast(limit: 20) {
    launch_date_local
    launch_site {
      site_name
    }
    mission_name
  }
  launchesUpcoming(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name
    }
  }
}


`

function FetchRocketData() {

  const [launches, setLaunches] = useState([])

  useEffect(() => {

    const fetchLaunchDetails = async()=> 
      await fetch('https://api.spacex.land/graphql/', {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({query:LAUNCHES_QUERY})
      }).then(response => response.json())
      .then(data => setLaunches(data.data))
   
     


    fetchLaunchDetails()
    
}, [])

return launches;
 
}

export default FetchRocketData