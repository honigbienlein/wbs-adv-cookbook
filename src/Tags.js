import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

export default function Tags({tags}){

    
    return (
        <div className="tags">
            <h3>Our lovely Tags</h3>
            <div className="tagList"></div>
            {(tags.length > 0) ? 
                tags.map((tag, index) => 
                    (<Link key={index} to={`/search/tag/${tag}`} className="hashtag" >{`#${tag}`}</Link>)
                )
            : ""}
        </div>
    )
}