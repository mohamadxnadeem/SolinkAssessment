import React, {useState, useEffect} from 'react';
import moment from 'moment-timezone';



const LAUNCHES_QUERY = `

{

  launchesPast(limit: 20) {
    launch_date_utc
    launch_site {
      site_name
    }
    mission_name
  }
  
}


`

function PastLaunches() {

  const [last20Launches, setLast20Launches] = useState([])

  useEffect(() => {
    fetch('https://api.spacex.land/graphql/', {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({query:LAUNCHES_QUERY})
      }).then(response => response.json())
      .then(data => setLast20Launches(data.data.launchesPast))
    
  }, [])

  return (
    <div>
      <div>

<h1>Last 20 Launches:</h1>
<div
  className={
    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 "
  }
> 
<div className="block w-full overflow-x-auto">

<table className="items-center w-full border-collapse">
  <thead>
    <tr >
      <th 
         className={
          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-solink-nyanza "
        }>
          Mission Name
      </th>
      <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-solink-nyanza"}>
        Launch Date
      </th>
      <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-solink-nyanza"}>
        Launch Site Name
      </th>
    </tr>
  </thead>
  <tbody>
   {/* Loop starts here: */}
   {last20Launches.map((item, index) => (

    <tr key={index}>
      <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.mission_name}</td>
      <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{moment.utc(item.launch_date_utc).local().format(" MMMM d, YYYY HH:mm:ss a")}</td>
      <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.launch_site.site_name}</td>
    </tr>

    ))}

  {/* Loop Ends here: */}
    
  </tbody>
</table>
</div>
</div>


</div>
      
      </div>
  )
}

export default PastLaunches