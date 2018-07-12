import React from 'react';
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React Router Mini-Project</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <div className="text">Menu</div>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to={"/"} className="nav-item nav-link" >Home <span className="sr-only">(current)</span></Link>
                    <Link to={"/events"} className="nav-item nav-link" >Events</Link>
                    <Link to={"/meetups"} className="nav-item nav-link" >Meetups</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;