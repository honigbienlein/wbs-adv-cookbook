// React
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
// Style
import "./index.css"
// Components
import Footer from './Footer.js'
import Tags from './Tags'
import Authors from './Authors'
import Legal from './Legal.js'
import PrivacyPolicy from './PrivacyPolicy.js'
import TermsOfUse from './TermsOfUse.js'
import LandingPage from './LandingPage.js'
import SearchResult from './SearchResult'
import SearchTag from './SearchTag'

export const urlImages = "http://127.0.0.1:8000/images/"
export const urlProfileImages = "http://127.0.0.1:8000/images/profimages/"

export default function App() {
  
  const location = useLocation()
  const [test, test2] = location.pathname.split("/").slice(-2)
  
  const [recipes, setRecipes] = useState([])
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const [authors, setAuthors] = useState([])
  const [tags, setTags] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(()=> handleSearch(test, test2),[test2])

  fetch('http://127.0.0.1:8000/data')
    .then(res => {
      //console.log(res);
      return res.json()})
    .then(res => init(res))

  const init = (response) => {if(recipes.length === 0){
    
    const recipesList = response.items.filter((item) => {
      if(item.fields && item.fields.recipeName) {
          return item;
      }
      return null;
    }) 
    setRecipes(recipesList);

    const authorsList = response.items.filter((item) => {
      if(item.fields && item.fields.nickname) {
          return item;
      }
      return null
    })
    setAuthors(authorsList);

    const tagsList = [];
    response.items.filter((item) => {
      if(item.fields && item.fields.tags) {
          return item.fields.tags.map((tag) => !tagsList.includes(tag) ? tagsList.push(tag) : null);
      }
      return null
    })
    setTags(tagsList);  
}}

  
  
  const handleSearch = (para1, para2) => {
    let recipesList
    // handle search tag
    if(recipes.length !== 0 && para1==="tag"){
        recipesList = recipes.filter((item) => {
        if(item.fields.tags && item.fields.tags.includes(para2)) {
            console.log(item.fields.tags)
            return item;
        }
        return null;
    }) 
    setSearchedRecipes(recipesList)
    setSearch(para2)
    }
    // handle search recipeName and description
    if(recipes.length !== 0 && para1==="search"){
      const [authorId] = authors.filter((item) => item.fields.nickname===para2)
      const id = authorId.fields.author_Id
      recipesList = recipes.filter((item) => {
      if(item.fields && (item.fields.description.includes(para2) || item.fields.recipeName.includes(para2) || (item.fields.author_Id.fields.author_Id === id))) {
          return item.fields;
      }
      return null;
    }) 
    setSearchedRecipes(recipesList)
    setSearch(para2)
    }
    // handle search recipes of author
    if(recipes.length !== 0 && para1==="recipes"){
      const [authorId] = authors.filter((item) => item.fields.nickname===para2)
      const id = authorId.fields.author_Id
      recipesList = recipes.filter((item) => {
        if(item.fields.author_Id.fields && (item.fields.author_Id.fields.author_Id === id)) {
          return item.fields;
      }
      return null;
    }) 
    setSearchedRecipes(recipesList)
    setSearch(para2)
    }
  }

  const toSearch = (event) =>{
    const input = event.target.value;
    setSearch(input);
  };
  return (
    <div className="App">
      
      <header className="header">
        <Link to="/"><img alt="logoCookbook" className="logo" src={ require('./images/logo.png') } /></Link>
        <div>
            <input className="searchBar" type="text" onChange={toSearch} value={search}></input>
            <Link className='btn' to={`/search/${search}`}><button>Search</button></Link> 
        </div>
        <img alt="userProfile" className="profile" src={ require('./images/userProfile.png') } /> 
      </header>
      
      <main className='main'>
        <Tags tags={tags} />
        <Routes>
          {/* <Route path="/authors" element={<Authors />} */}
          <Route path='/legal/terms' element={<TermsOfUse />} />
          <Route path='/legal/privacy' element={<PrivacyPolicy />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/search/recipes/:find' element={<LandingPage recipes={searchedRecipes}/>} />
          <Route path='/search/tag/:find' element={<SearchTag recipes={searchedRecipes}/>} />
          <Route path='/search/:find' element={<SearchResult recipes={searchedRecipes}/>} />
          <Route path='/' element={<LandingPage recipes={recipes} />} />
        </Routes>
        <Authors authors={authors} />
      </main> 
      
      <Footer />

    </div>
  );
}
