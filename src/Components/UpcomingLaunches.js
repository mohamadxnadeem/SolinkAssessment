import moment from 'moment';
import React, {useState, useEffect} from 'react';
import { add } from 'date-fns';


const LAUNCHES_QUERY = `

{

  launchesUpcoming(limit: 10) {
    mission_name
    launch_date_utc
    launch_site {
      site_name
    }
  }
}


`



function UpcomingLaunches() {

  const [next10launches, setNext10launches] = useState([])

  useEffect(() => {
    fetch('https://api.spacex.land/graphql/', {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({query:LAUNCHES_QUERY})
      }).then(response => response.json())
      .then(data => setNext10launches(data.data.launchesUpcoming))
    
  }, [])

  

 


  return (
    <div>

      <h1>Next 10 Launches:</h1>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 "
        }
      > 
      <div className="block w-full overflow-x-auto">

      {/* Loop starting here */}

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
          {next10launches.map((item, index) => (

            <tr key={index}>
              <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.mission_name}</td>
              <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{moment.utc(item.launch_date_utc).local().format("HH:mm:ss a")}</td>
              <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.launch_site.site_name}</td>
            </tr>

          ))}

          {/* Loop Ends here: */}
          
        </tbody>
      </table>

    
      </div>
      </div>

      
    </div>

    
  )
}




export default UpcomingLaunches