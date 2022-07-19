// React
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// Style
import "./index.css";
// Components
import Footer from './Footer.js';
import Tags from './Tags';
import Authors from './Authors';
import Legal from './Legal.js';
import PrivacyPolicy from './PrivacyPolicy.js';
import TermsOfUse from './TermsOfUse.js';
import LandingPage from './LandingPage.js';
import SearchResult from './SearchResult';
import SearchTag from './SearchTag';

export default function App() {
  
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: 'f5m18cklnsqx',
    accessToken: 'Pi0BGhsNg6RVKjHAICEns6PsCysyVGm6k3wYRqT_mc0'
  });
  const [recipes, setRecipes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");

  if(recipes.length === 0){
      client
      .getEntries()
      .then( (res) =>{
        const recipesList = res.items.filter((item) => {
          if(item.fields && item.fields.recipeName) {
              return item;
          }
          return null;
        }) 
        setRecipes(recipesList);

        const authorsList = res.items.filter((item) => {
          if(item.fields && item.fields.nickname) {
              return item;
          }
          return null
        })
        setAuthors(authorsList);

        const tagsList = [];
        res.items.filter((item) => {
          if(item.fields && item.fields.tags) {
              return item.fields.tags.map((tag) => !tagsList.includes(tag) ? tagsList.push(tag) : null);
          }
          return null
        })
        setTags(tagsList);
      }
      )
  .catch(err => console.log(err));    
  }
  //console.log(recipes);

  const find = (event) =>{
    const input = event.target.value;
    setSearch(input);
  };
  return (
    <div className="App">
      
      <header className="header">
        <img alt="logoCookbook" className="logo" src={ require('./images/logo.png') } />
        <div>
            <input className="searchBar" type="text" onChange={find} value={search}></input>
            <Link className='btn' to={`/search/${search}`}><button>Search</button></Link> 
        </div>
        <img alt="userProfile" className="profile" src={ require('./images/userProfile.png') } /> 
      </header>
      
      <main className='main'>
        <Tags tags={tags} setSearch={setSearch}/>
        <Routes>
          {/* <Route path="/authors" element={<Authors />} */}
          <Route path='/legal/terms' element={<TermsOfUse />} />
          <Route path='/legal/privacy' element={<PrivacyPolicy />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/search/tag/:find' element={<SearchTag />} />
          <Route path='/search/:find' element={<SearchResult />} />
          <Route path='/' element={<LandingPage recipes={recipes} />} />
        </Routes>
        <Authors authors={authors} search={search} setSearch={setSearch}/>
      </main> 
      
      <Footer />

    </div>
  );
}
