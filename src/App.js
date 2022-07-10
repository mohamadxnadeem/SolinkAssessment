import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";

import React from 'react'


import HomePage from "./Screens/HomePage";
import PastLaunchersPage from "./Screens/PastLaunchesPage";
import Header from './Components/Header';



function App() {



  return (
   
    <Router>
     <Header/>
     

    <div >
      <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route exact path='/pastLaunches'  element={<PastLaunchersPage />}/>
      </Routes>

     
      
    </div>
     

      
    </Router>
    

  );
}

export default App;
