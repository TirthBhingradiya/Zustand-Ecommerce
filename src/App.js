import logo from './logo.svg';
import './App.css';
import ProductList from './productList';
import { Route,Routes } from 'react-router-dom';
import Cart from "./cartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element= {<Cart/>}>
        </Route>
      </Routes>
          
    </div>
  );
}

export default App;
