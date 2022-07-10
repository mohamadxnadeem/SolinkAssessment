import React from 'react';
import NextLaunch from '../Components/NextLaunch';
import UpcomingLaunches from '../Components/UpcomingLaunches';






function HomePage() {


  return (
    <>
     <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <NextLaunch/>
        </div>
        <div className="w-full mb-12 px-4">
          <UpcomingLaunches/>
        </div>
     </div>

    


    </>
    

    

    
   
  )
}

export default HomePage