import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import AllProjects from './pages/AllProjects';
import About from './pages/About';
import DetailsProject from './Components/DetailsProject';
import Blogs from './pages/Blogs';



function App() {
 
  return (
    <div className='bg-slate-200'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/project' element={<Projects></Projects>}></Route>
        <Route path='/allproject' element={<AllProjects></AllProjects>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/:projecttId' element={<DetailsProject></DetailsProject>}></Route>
      </Routes>

   
    </div>
  );
}

export default App;
