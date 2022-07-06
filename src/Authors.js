import React from 'react';

export default function Authors(){
// API fetch getAuthors

    return(
        <>
            <p><strong>Our lovely cookers</strong></p>
            <ul>
                {authors.map(({ profilePicture, nickName }) => (
                    <li>
                        <img src={profilePicture} alt="profilePicture"/>
                        <p>{nickName}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}