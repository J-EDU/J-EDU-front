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

function App() {
  return (
    <Flex w="100%" direction="column">
      <Navbar />

      {/* <Viewcourse /> */}
      <Video />
      {/* <Feed /> */}
      <Footer />
    </Flex>
  );
}

export default App;
