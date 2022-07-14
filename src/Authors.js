import React from 'react';
export default function Authors(){

    const contentful = require("contentful");
    const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.REACT_APP_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.REACT_APP_API_KEY
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    client
    .getEntries()
    .then( (res) =>{
        //console.log(res);
        const authors = res.items.filter((item) => {
            if(item.fields.hasOwnProperty('nickname')) {
                return item;
            }
        })
        //console.log(authors);
    }
    )
    .catch(err => console.log(err));    

    return(
        <>
            <p><strong>Our lovely cookers</strong></p>
            {/* <ul>
                {authors.map((author) => (
                    <li>
                        <img src={author.fields.profilePicture.fields.file.url} alt="profilePicture"/>
                        <p>{author.fields.nickname}</p>
                    </li>
                ))} 
            </ul> */}
        </>
    )
}

//usestate authors ternary operator