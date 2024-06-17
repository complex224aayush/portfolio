
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./actions/user";
import AdminPanel from './components/Admin/AdminPanel';



function App() {
 
  

  const dispatch=useDispatch();

  const {isAuthenticated}=useSelector((state)=> state.login);

  useEffect(()=>{
    dispatch(getUser());
  }, [dispatch]);


  return (
  <Router>
   <Header/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Projects' element={<Projects/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Account' element ={{isAuthenticated} ? <AdminPanel/> : <Login/>}/>
    </Routes>
<Footer/>

  </Router>
  );
}
export default App;
