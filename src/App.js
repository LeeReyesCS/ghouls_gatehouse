import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Layout from './layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Routes>
    <Route path ="/" element = {<Layout/>}>
      {/* <Route path ="/poems" element={<Poems/>}></Route>
      <Route path ="/contact" element ={<Contact/>}></Route> */}
      <Route path ="/" element={<Home/>}></Route>

    </Route>
  </Routes>);
}

export default App;
