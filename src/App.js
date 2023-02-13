
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import CartItem from './components/CartItem';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartItem/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
