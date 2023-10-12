import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from "./components/Details";
import Navbar from './components/Navbar';
import Edit from "./components/Edit";
import Add from "./components/Add";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
        
          <Route path="/PaymentDetails/add" element={<Add />} />
          <Route path="/PaymentDetails/edit/:id" element={<Edit />} />
          <Route path="/PaymentDetails/:id" element={ <Details/>} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
