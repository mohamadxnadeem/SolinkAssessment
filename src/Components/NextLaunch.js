import React, {useState, useEffect} from 'react';


const LAUNCHES_QUERY = `

{
  launchNext {
    launch_date_local
    mission_name
    launch_site {
      site_name
    }
  }
  
}


`

function NextLaunch() {
  const [nextlaunch, setNextlaunch] = useState([])

  useEffect(() => {
    fetch('https://api.spacex.land/graphql/', {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({query:LAUNCHES_QUERY})
      }).then(response => response.json())
      .then(data => setNextlaunch(data.data.launchNext))
    
  }, [])

  
  return (
    

    <div>
      <h1>Next Launch</h1>

      {/* Count down timer in hours */}

      {/* Table for next 10 launches */}
      
    </div>
  )
}

export default NextLaunch