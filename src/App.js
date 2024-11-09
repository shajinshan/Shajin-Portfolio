
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from "./components/screens/HomePage";
import 'boxicons/css/boxicons.min.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './components/screens/AboutPage';
import Experience from './components/component/Experience';
import Navbar from './components/component/Navbar';
import Education from './components/component/Education';


function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
      <Route path='/' element={ <HomePage/>}/>
      <Route path='/experience' element={ <Experience/>}/>
      <Route path='nav' element={<Navbar/>}/>
      <Route path='/education' element={<Education/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
