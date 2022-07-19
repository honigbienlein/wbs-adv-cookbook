import React from 'react';
import { Link } from "react-router-dom";

export default function Legal () {

    return (
            <div>
                <div>
                    <div>
                        <Link to='/legal/privacy'className="link-legal">Privacy Policy</Link>
                    </div>

                    <div>
                         <Link to='/legal/terms'className="link-legal">Terms of Use</Link>
                    </div>
                    <div> 
                    </div>
                </div>
            </div>  

    )
    
}


