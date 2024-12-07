import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/home' exact Component={HomeScreen}/>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
