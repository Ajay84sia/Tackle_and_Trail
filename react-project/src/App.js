import logo from './logo.svg';
import './App.css';
import NavComp1 from './HomePage/navComp1';
import { Divider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import { Product } from './Pages/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
     <Product/>
    </div>
  );
}

export default App;
