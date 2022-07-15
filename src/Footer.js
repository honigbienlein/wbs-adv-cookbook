import React from 'react';
import { Link } from "react-router-dom";

export default function Footer () {

    return (
        <footer className="footer">
          <div className="footer-link-legal">
          <Link to='/legal'>Legal</Link>
          </div>
          <div className="footer-copyright">
            Copyright © 2022 Community Cookbook. All rights reserved.
          </div>     
        </footer>
    )

}