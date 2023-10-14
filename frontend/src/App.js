import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category="mens"/>}/>
          <Route path='/womens' element={<ShopCategory category="womens"/>}/>
          <Route path='/kids' element={<ShopCategory category="kids"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>      
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
