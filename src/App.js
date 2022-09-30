import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import { Routes, Route } from "react-router-dom";
 import About from './components/About';
import './App.css';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<>
        <Slider/>
    <ProductList/>
      </>}/>
      <Route path="about" element={
      <>
        <About/>
      </>}/>
      <Route path="products/:productId" element={
      <>
        <ProductDetails/>
      </>}/>
    </Routes> 
    </div>
  ); 
}

export default App;
