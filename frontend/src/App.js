import Signup from './components/auth/signup.js'
import Course from './components/course/addcourse.js'
import Footer from './components/main/Footer.js'
import {Flex} from '@chakra-ui/react';
import Signin from './components/auth/signin.js'
import Navbar from './components/main/navbar.js'
import Feed from './components/all/feedback.js'
import Announ from './components/main/announ.js'
import Whichlist from './components/all/whichlist.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/all/quiz.js'
import Viewcourse from './components/course/viewcourse.js'
import Video from './components/video/addvideo.js'
import { About } from './components/About/about.jsx';
import { Contact } from './components/Conatct/contact.jsx';
import ViewCourse from './components/course/viewcourse.js';
// import { Home } from './h.js';
import { Home } from './components/Home/home';

import { Slide } from './components/course/popularCourse.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Flex w="100%" direction="column"> 
    <Navbar />
    <Routes>
   
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/feed" element={<Feed />}></Route>
          <Route exact path="/courses" element={<ViewCourse />}></Route>
          </Routes>
    
      <Footer />
    </Flex>

    </Router>

    {/* <Slide/> */}
    </>
  );
}

export default App;
