import React from 'react';
import { Link } from 'react-router-dom';
import { urlProfileImages } from './App';

export default function Authors({authors}){

    
    return (
        <div className="authors">
            <h3>Our lovely chefs</h3>
            <div className="authorList">
                {(authors.length > 0) ? 
                    authors.map((author, index) => 
                        (
                        <Link key={index} className="authorLink" to={`/search/recipes/${author.fields.nickname}`}>
                            <div className="author">
                                <p className="nickname">{author.fields.nickname}</p>
                                <img src={`${urlProfileImages}${author.fields.profilePicture.fields&&author.fields.profilePicture.fields.file.fileName}`} alt="profilePicture" width="40px" height="40px"/>
                            </div>
                        </Link>
                        )
                    ) 
                : ''}
            </div>
        </div>
    )
}