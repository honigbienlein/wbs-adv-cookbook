import './App.css';
import "./index.css";
import Footer from './Footer.js';
import Header from './Header.js';
import { Routes } from 'react-router-dom';
import Tags from './Tags';
import Authors from './Authors';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Tags />
        <Routes>
      
        </Routes>
        <Authors />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
