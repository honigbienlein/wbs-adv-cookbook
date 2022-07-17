import React from 'react';
import { Link } from "react-router-dom";

export default function Footer () {

    return (
        <footer className="footer">

          <div className='links'>
            <Link to='/legal' className="link-footer">Legal</Link>
            <Link to='/legal/privacy' className="link-footer">Privacy Policy</Link>
            <Link to='/legal/terms' className="link-footer">Terms of Use</Link>
          </div>
          
          <div className="footer-copyright">Copyright © 2022 Community Cookbook. All rights reserved.</div> 
           
        </footer>
    )

}