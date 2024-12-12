import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import './components/Room.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/home' exact Component={HomeScreen}/>
      </Routes>
      <Routes>
        <Route path='/book/:roomid/:fromdate/:todate' exact Component={BookingScreen}/>
        <Route path='/register' exact Component={RegisterScreen}/>
        <Route path='/login' exact Component={LoginScreen}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
