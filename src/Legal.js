import React from 'react';
import { Link } from "react-router-dom";

export default function Legal () {

    return (
            <div>
                <ul>
                    <li>
                        <Link to='/legal/privacy'>Privacy Policy</Link>
                    </li>
                    
                    <li>
                         <Link to='/legal/terms'>Terms Of Use</Link>
                    </li>
                </ul>
            </div>  

    )
    
}


