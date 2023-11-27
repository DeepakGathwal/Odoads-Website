import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Media from './pages/medias/media';
import "react-toastify/dist/ReactToastify.css";
import Map from './pages/map/map';
import Details from './pages/seedetails/details'
import Cart from './pages/cart/cart'
import NoPage from './pages/error/error'
import Contact from "./pages/contact-us/contact";
import About from './pages/about-us/about'
import FAQS from './pages/faqs/faqs'
import Team from './pages/team/team'
import News from './pages/news_media/news_media'
import Profile from './pages/profile/profile'
import Testimonial from './pages/testimonial/testimonial'
import "@fontsource/montserrat";
import 'animate.css';
import Footer from "./pages/footer/footerN";
import Privacy from "./pages/privacy/privacy";
import Login from './pages/login/authorization';
import Feedback from "./components/feedback/feedback";

// import MediaN from "./pages/mediaN/mediaN";


function App() {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
         <Route index path="/" element={<Home/>}/>
          <Route exact path="/:category_name/:city_name" element={<Media/>}/>   
          <Route exact path="/map" element={<Map/>}/>
          <Route exact path="/services/:category_name/:meta_title" element={<Details/>}/>
          <Route exact path="/cart" element={<Cart/>}/> 
          <Route exact path="/contact-us" element={<Contact/>}/> 
          <Route exact path="/about-us" element={<About/>}/> 
          <Route exact path="/faq" element={<FAQS/>}/> 
          <Route exact path="/team" element={<Team/>}/>
          <Route exact path="/media-and-news" element={<News/>}/>  
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/testimonials" element={<Testimonial/>}/> 
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/privacy-policy" element={<Privacy/>}/> 
          <Route exact path="*" element={<NoPage/>}/> 
        </Routes>
        <Feedback/>
        {window.location.pathname !== '/login' && <Footer/>}
      </BrowserRouter>  
    </>
  );
}

export default App;


