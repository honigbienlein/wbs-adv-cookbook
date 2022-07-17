import React, { useState } from 'react';

export default function Authors(){

    const contentful = require("contentful");
    const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'f5m18cklnsqx',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'Pi0BGhsNg6RVKjHAICEns6PsCysyVGm6k3wYRqT_mc0'
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    const [authors, setAuthors] = useState([]);
    if(authors.length === 0){
        client
        .getEntries()
        .then( (res) =>{
            //console.log(res);
            const authorsList= res.items.filter((item) => {
                if(item.fields&&item.fields.nickname) {
                    return item;
                }
                return null
            })
            setAuthors(authorsList);
        }
        )
    .catch(err => console.log(err));    
    }

    return(
        <div className="authors">
            <h3>Our lovely chefs</h3>
            <div className="authorlist">
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