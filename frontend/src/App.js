import Signup from "./components/auth/signup.js";
import Footer from "./components/main/Footer.js";
import { Flex } from "@chakra-ui/react";
import Signin from "./components/auth/signin.js";
import Navbar from "./components/main/navbar.js";
import Feed from "./components/all/feedback.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewCourse from "./components/course/viewcourse.js";
import { Home } from "./components/main/home";
import AboutTeam from './components/about/about.js'
// import { Slide } from './components/course/popularCourse.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewVideo from './components/video/addvideo.js'
import {Contact} from './components/contactus/contact.js'
import AddedCourse from './components/course/addcourse.js'
import Signin2 from "./components/auth/signin2.js";
import Signup2 from "./components/auth/signup2.js";

function App() {
  return (
    <Flex>
      <Router>
        <Flex w="100%" direction="column">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<AboutTeam />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route> 
            <Route exact path="/signin" element={<Signin2 />}></Route>
            <Route exact path="/signup" element={<Signup2 />}></Route>
            <Route exact path="/feed" element={<Feed />}></Route>
            <Route exact path="/courses" element={<ViewCourse />}></Route>
            <Route exact path='/AddVedio' element={<ViewVideo />}></Route>
            <Route exact path='/course/addcourse' element={<AddedCourse />}></Route>

          </Routes>

          <Footer />
        </Flex>
      </Router>

      {/* <Slide/> */}
    </Flex>
  );
}

export default App;
