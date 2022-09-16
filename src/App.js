import logo from './logo.svg';
import './App.css';
import { Component, lazy } from 'react';
import {BrowserRouter,Routes,Route, NavLink ,} from 'react-router-dom';
import Home from '../src/Web/Home';
import Shop from '../src/Web/Shop';
import Blog from '../src/Web/Blog'
import About from '../src/Web/About'
import Contact from '../src/Web/Contact'
import Cart from './Web/Cart';
import Sproduct from './Web/Sproduct';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/home" exact element={<Home></Home>} >
            </Route>
            <Route path="/shop" element={<Shop/>} >
            </Route>
            <Route path="/blog" element={<Blog/>} >
            </Route>
            <Route path="/About" element={<About/>} >
            </Route>
            <Route path="/Contact" element={<Contact/>} >
            </Route>
            <Route path="/Cart" element={<Cart/>} >
            </Route><Route path="/sproduct" element={<Sproduct/>} >
            </Route>
        </Routes>
    </BrowserRouter>
    );
  }


}

export default App;