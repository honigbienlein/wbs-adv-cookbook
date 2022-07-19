import React from 'react';
import { Link } from "react-router-dom";

export default function Legal () {

    return (
            <div>
                <div>
                    <div>
                        <Link to='/legal/privacy'className="link-legal">Privacy Policy</Link>
                        <img className='LegalIcon' src={ require('./images/PrivacyPolicyIcon.jpg') } alt="Lock" />
                    </div>

                    <div>
                         <Link to='/legal/terms'className="link-legal">Terms of Use</Link>
                         <img className='LegalIcon' src={ require('./images/TermsofUseIcon.png') } alt="Handshake" />
                    </div>
                </div>
            </div>  

    )
    
}


