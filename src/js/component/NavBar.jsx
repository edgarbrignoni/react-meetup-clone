import React from 'react';
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to={"/"} className="nav-item nav-link" >
                <img src="http://via.placeholder.com/200x50" />
            </Link>
            <form className="form-inline">
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Login</button>
            </form>
        </nav>
    );
}

export default NavBar;