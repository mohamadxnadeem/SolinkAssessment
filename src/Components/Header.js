import React  from 'react';
import HeaderItem from './HeaderItem'; 
import { HomeIcon, RewindIcon } from '@heroicons/react/outline'
import {
  Link

} from "react-router-dom";


// npm install @heroicons/react

function Header() {
  return (

    <div className='bg-solink-blue	'>
      <header className=' flex flex-col sm:flex-row p-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl '>
            <Link to={'/'}>
              <HeaderItem title='HOME' Icon={HomeIcon}/>
            </Link>
            <Link to={'/pastLaunches'}>
              <HeaderItem title='PREVIOUS LAUNCHES' Icon={RewindIcon}/>
            </Link>
            
        </div>
        <img 
          className='object-contain'
          src='https://kineticmarketing.s3.amazonaws.com/rocket.png' 
          width={100}
          height={100}
          />
      </header>
    </div>
    
  )
}

export default Header