import React from 'react';
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to={"/"} className="nav-item nav-link" >
                <img src="http://via.placeholder.com/200x50" />
            </Link>
            <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
}

export default NavBar;