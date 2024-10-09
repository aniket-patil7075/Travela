import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Booknow from './components/Booknow';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Packages' element={<Packages/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Booknow' element={<Booknow/>}/>
        <Route path='/registration' element={<Registration/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Booknow' element={<Booknow/>} />
      </Routes>
      <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
