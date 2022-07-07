import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";

import HomePage from "./Screens/HomePage";
import PastLaunchersPage from "./Screens/PastLaunchesPage";
import Header from './Components/Header'


function App() {
  return (
   
    <Router>
       <Header />
    <div className="text-3xl font-bold underline">
      <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route exact path='/past-launches'  element={<PastLaunchersPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
