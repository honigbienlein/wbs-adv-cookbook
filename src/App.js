import './App.css';
import "./index.css";
import Footer from './Footer.js';
import Header from './Search.js';
import { Route, Routes } from 'react-router-dom';
import Tags from './Tags';
import Authors from './Authors';



function App() {
  return (
    <div className="App">
      <header>
        <img alt="logoCookbook" className="logo" src={ require('./images/logo.png') } />
        {/* <Route path="" element={<Search />} /> */}
        <img alt="userProfile" className="profile" src={ require('./images/userProfile.png') } /> 
      </header>
      
      <main>
        <Tags />
        <Routes>
          {/* <Route path="/authors" element={<Authors />} */}
        </Routes>
        <Authors />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
