import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='bg-slate-200'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/project' element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
