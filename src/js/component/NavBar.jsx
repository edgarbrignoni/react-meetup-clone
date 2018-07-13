import React from 'react';
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to={"/"} className="nav-item nav-link" >
                <img className="img-fluid" src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-black.png" />
            </Link>
            <form className="form-inline">
                <button className="btn btn-primary my-2 my-sm-0 " type="submit">Login</button>
            </form>
        </nav>
    );
}

export default NavBar;