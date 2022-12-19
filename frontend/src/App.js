
import { Component } from 'react';
import "./App.css"; 
import Footer from './components/Footer';
import Announcement from "./components/Announcement"
import 'bootstrap/dist/css/bootstrap.min.css';
import WatchHistory from './components/WatchHistory';
import {Contact} from './components/Contact'
import ViewCourse from './components/viewCourse';
import AddCourse from './components/addCourse';
// import AddVideo from './components/addVideo';
import ViewFeedback from './components/ViewFeedback'
import AboutTeam from './components/About.js'
import Feedbackcard from './components/AddFeedback';
function App() {
  return (
    <div className="App">
      {/* <ViewFeedback/> */}
      {/* <WatchHistory/> */}
      {/* <Announcement/> */}
         {/* <Contact/> */}
         {/* <About/> */}
         {/* <Footer/> */}
           {/* <AddVideo/> */}
            {/* <AddCourse/>  */}
            {/* <ViewCourse/> */}
            {/* <AboutTeam /> */}
             <Feedbackcard/>
       
    </div>
  );
}

export default App;
