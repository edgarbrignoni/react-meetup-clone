import React from 'react';
import { Link } from "react-router-dom";
import logo4Geeks from '../../img/logo4Geeks.png';

//create your first component
class Footer extends React.Component{
    
  render(){
    return (
      <div className="footer">
        <div className="container-fluid mt-5 pb-2">
          <p className="text-center">
            <Link to="/">
              <img id="logoInverted" className="img-fluid" src={logo4Geeks} />
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;