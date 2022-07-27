import Login from './components/Login'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  exact path='/' element={<Login/>} />   
    <Route  exact path='/register' element={<Register/>} />
    <Route  exact path='/dashboard' element={<><Navbar/><Dashboard/></>} />   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
