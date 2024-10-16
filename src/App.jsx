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
import Desti from './components/Desti';
import ExploreTour from './components/ExploreTour';
import OurGallery from './components/OurGallery';
import Testi from './components/Testi';
import TravelBooking from './components/TravelBooking';
import TravelGuides from './components/TravelGuides';
import Destination from './components/Destination';
import Gallery from './components/Gallery';

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
        <Route path='/Desti' element={<Desti/>} />
        <Route path='/ExploreTour' element={<ExploreTour/>} />
        <Route path='/OurGallery' element={<OurGallery/>} />
        <Route path='/Testi' element={<Testi/>} />
        <Route path='/TravelBooking' element={<TravelBooking/>} />
        <Route path='/TravelGuide' element={<TravelGuides/>} />
        <Route path='/Destination' element={<Destination/>} />
        <Route path='/Gallery' element={<Gallery/>} />
      </Routes>
      
      <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
