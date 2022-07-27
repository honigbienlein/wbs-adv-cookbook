import React from 'react';

export default function Authors({authors}){

    
    return (
        <div className="authors">
            <h3>Our lovely chefs</h3>
            <div className="authorList">
                {(authors.length > 0) ? 
                    authors.map((author, index) => 
                        (<div className="author" key={index}>
                            <p className="nickname">{author.fields.nickname}</p>
                            <img src={`http://127.0.0.1:8000/images/profimages/${author.fields.profilePicture&&author.fields.profilePicture.fileName}`} alt="profilePicture" width="40px" height="40px"/>
                        </div>)
                    ) 
                : ''}
            </div>
        </div>
    )
}