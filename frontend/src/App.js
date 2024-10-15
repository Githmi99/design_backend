import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct';
import UpdateProduct from './components/UpdateProduct';
import About from './components/About';
import config from './config'; // Import config file

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  console.log("Backend URL:", config.backendURL); // Use this URL for API calls

  return (
    <div className="App">
      <Navbar title="IMS" about="About"></Navbar>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct backendURL={config.backendURL} />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct backendURL={config.backendURL} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
