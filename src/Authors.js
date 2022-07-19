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
                            <img src={author.fields.profilePicture.fields&&author.fields.profilePicture.fields.file.url} alt="profilePicture" width="40px" height="40px"/>
                        </div>)
                    ) 
                : ''}
            </div>
        </div>
    )
}

//usestate authors ternary operator