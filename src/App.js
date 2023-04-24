import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Main from './screens/Mainpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      {/* <div> <Home></Home> </div> */}
      {/* <div> <Login></Login> </div> */}
      {/* <div> <Signup></Signup> </div> */}
      {/* <div> <Loading></Loading> </div> */}
      <div>
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/login" element={ <Login/> } />
          <Route exact path="/signup" element={ <Signup/> } />
          <Route exact path="/main" element={ <Main/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;