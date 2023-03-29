import logo from './logo.svg';
import './App.css';
import NavComp1 from './HomePage/navComp1';
import { Divider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
