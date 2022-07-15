// React
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Style
import "./index.css";
// Components
import Footer from './Footer.js';
import Tags from './Tags';
import Authors from './Authors';
import Search from './Search.js';
import Legal from './Legal.js';
import PrivacyPolicy from './PrivacyPolicy.js';
import TermsOfUse from './TermsOfUse.js';
import LandingPage from './LandingPage.js';

export default function App() {
  return (
    <div className="App">
      
      <header className="Header">
        <img alt="logoCookbook" className="logo" src={ require('./images/logo.png') } />
        <Search />
        <img alt="userProfile" className="profile" src={ require('./images/userProfile.png') } /> 
      </header>
      
      <main className='main'>
        <Tags />
        <Routes>
          {/* <Route path="/authors" element={<Authors />} */}
          <Route path='/legal/terms' element={<TermsOfUse />} />
          <Route path='/legal/privacy' element={<PrivacyPolicy />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Authors />
      </main> 
      
      <Footer />
    
    </div>
  );
}
