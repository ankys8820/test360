// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Index from './pages/index';
import Service from './pages/service';
import About from './pages/about';
import Why from './pages/why';
import Team from './pages/team';
import Intern from './pages/intern';
import Startup from './pages/startup';
import Helmet from 'react-helmet';
import Login from './pages/login';
import InternOnBoard from './pages/internOnboard';
import StartupRegistrationForm from './pages/startupRegistration';


const App = () => {
  return (
    <Router>
      <Helmet>
        <meta name="keywords" content="Blinc 360, Startups, Interns, Incubation, Mentorship, Training, Seed Funding" />
        <meta name="description" content="Blinc 360 - Incubators for Startups and Interns providing mentorship, training, and seed funding." />
        <meta name="author" content="Blinc 360" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      </Helmet>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/why" element={<Why/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/intern" element={<Intern/>}/>
          <Route path="/startup" element={<Startup/>}/>
          <Route path='/loginForm' element={<Login/>}/>
          <Route path='/intern-onboard' element={<InternOnBoard/>}/>
          <Route path='/startupRegistration' element={<StartupRegistrationForm/>}/>
          <Route path='/internonboard' element={<InternOnBoard/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
