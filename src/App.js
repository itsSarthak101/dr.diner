import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Main from './screens/Mainpage';
import Trivia from './screens/Trivia';
import About from './screens/About';
import MyOrders from './screens/MyOrders';

// import Loading from './components/Loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
    <CartProvider>
      <Router>
        {/* <div> <Loading></Loading> </div> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/main" element={<Main />} />
            <Route exact path="/myorders" element={<MyOrders />} />
            <Route exact path="/trivia" element={<Trivia />} />
            
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;